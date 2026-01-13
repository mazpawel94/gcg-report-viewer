import { Injectable, OnModuleInit } from '@nestjs/common';
import * as pty from 'node-pty';
import { IPty } from 'node-pty';
import { join } from 'path';

@Injectable()
export class MacondoService implements OnModuleInit {
  private macondoInstance: IPty | null = null;
  private commandQueue: Array<{
    command: string;
    resolve: (value: any) => void;
    reject: (reason: any) => void;
    expectedPrompts?: number;
    completionPattern?: RegExp;
    delayBefore?: number;
  }> = [];
  private isProcessingCommand = false;
  private currentOutputBuffer = '';
  private promptsReceived = 0;

  async onModuleInit() {
    await this.initialize();
  }

  private async initialize() {
    console.log('=== INITIALIZE START ===');
    if (this.macondoInstance) {
      return;
    }

    const macondoFileName = process.platform === 'win32' ? 'macondo.exe' : 'macondo';
    const macondoPath = join(process.cwd(), 'src/assets', macondoFileName);

    const env = {
      ...process.env,
      MACONDO_DATA_PATH: join(process.cwd(), 'src/assets/data'),
      DEFAULT_LEXICON: 'OSPS50',
    };

    const macondo = pty.spawn(macondoPath, [], {
      name: 'xterm-color',
      cols: 80,
      rows: 30,
      cwd: process.cwd(),
      env: env,
    });
    macondo.onData((data) => {
      this.currentOutputBuffer += data;

      if (this.isProcessingCommand && this.commandQueue.length > 0) {
        const current = this.commandQueue[0];
        const cleaned = data.replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '').replace(/[\b]+/g, '');
        const hasPrompt = cleaned.match(/macondo>\s*$/m) || this.currentOutputBuffer.match(/macondo>\s*$/m);

        if (current.completionPattern) {
          if (current.completionPattern.test(this.currentOutputBuffer)) {
            console.log('[COMPLETION PATTERN MATCHED]');
            this.handleCommandComplete();
          }
        } else if (current.expectedPrompts !== undefined) {
          if (hasPrompt) {
            this.promptsReceived++;
            console.log(`[PROMPT DETECTED] ${this.promptsReceived}/${current.expectedPrompts}`);

            if (this.promptsReceived >= current.expectedPrompts) {
              console.log('[ALL PROMPTS RECEIVED]');
              this.handleCommandComplete();
            }
          }
        } else {
          if (hasPrompt) {
            this.handleCommandComplete();
          }
        }
      }
    });

    macondo.onExit(({ exitCode, signal }) => {
      console.log(`Macondo exited with code ${exitCode}, signal ${signal}`);
      this.macondoInstance = null;
      this.commandQueue.forEach((item) => item.reject(new Error('Macondo process closed')));
      this.commandQueue = [];
    });

    this.macondoInstance = macondo;
    await this.waitForReady();
    this.macondoInstance.write('new\n');
    // this.executeCommand({ command: 'new\n', resolve: () => console.log('New game started'), reject: () => {} });

    console.log('Macondo initialized and ready');
  }

  private waitForReady(): Promise<void> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => reject('Macondo init timeout'), 10000);
      let buffer = '';
      let disposed = false;

      const dataHandler = this.macondoInstance.onData((data: string) => {
        if (disposed) return;

        buffer += data;

        if (buffer.includes('started loop') || buffer.includes('macondo>')) {
          clearTimeout(timeout);
          disposed = true;
          dataHandler.dispose();

          setTimeout(() => {
            console.log('Macondo ready');
            resolve();
          }, 500);
        }
      });
    });
  }

  private handleCommandComplete() {
    if (this.commandQueue.length === 0) {
      this.isProcessingCommand = false;
      console.log('[HANDLE_COMPLETE] No commands in queue');
      return;
    }

    const current = this.commandQueue.shift();
    const output = this.currentOutputBuffer;
    this.currentOutputBuffer = '';
    this.promptsReceived = 0;

    const cleaned = output
      .replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '')
      .replace(/[\b]+/g, '')
      .replace(/\r/g, '');

    const lines = cleaned
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0 && !line.startsWith('macondo>'));

    current.resolve({
      bestMoves: lines,
      rawOutput: output,
      cleanedOutput: cleaned,
    });

    if (this.commandQueue.length > 0) {
      this.isProcessingCommand = false;
      this.processNextCommand();
    } else {
      this.isProcessingCommand = false;
    }
  }

  private processNextCommand() {
    if (this.commandQueue.length === 0 || this.isProcessingCommand) return;

    const current = this.commandQueue[0];

    if (current.delayBefore && current.delayBefore > 0) {
      console.log(`[DELAY] Waiting ${current.delayBefore}ms before executing command`);
      setTimeout(() => {
        this.executeCommand(current);
      }, current.delayBefore);
    } else {
      this.executeCommand(current);
    }
  }

  private executeCommand(current: any) {
    this.isProcessingCommand = true;
    this.currentOutputBuffer = '';
    this.promptsReceived = 0;

    try {
      console.log(`[MACONDO] Sending: ${current.command.trim().substring(0, 50)}...`);
      this.macondoInstance.write(current.command);
    } catch (err) {
      console.error(`[MACONDO] Error: ${err}`);
      current.reject(err);
      this.commandQueue.shift();
      this.isProcessingCommand = false;
      this.processNextCommand();
    }
  }

  async analyze(rack: string, playedMove?: string): Promise<{ bestMoves: string[]; rawOutput: string }> {
    if (!this.macondoInstance) {
      throw new Error('Macondo not initialized');
    }

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('Analyze timeout'));
      }, 30000);

      this.commandQueue.push({
        command: [`rack ${rack}`, 'gen 20'].join('\n') + '\n',
        resolve: (result) => {
          console.log('[SIM STEP 1] Setup complete');
        },
        reject,
        expectedPrompts: 1,
      });
      this.commandQueue.push({
        command: 'gen 20\n',
        resolve: (result) => {
          console.log('[SIM STEP 2] Results received');
          clearTimeout(timeout);
          resolve(result);
        },
        reject,
      });

      // commit 10B JIN.LE
      if (playedMove && playedMove.trim().length > 0)
        this.commandQueue.push({
          command: `commit ${playedMove}\n`,
          resolve: (result) => {
            console.log('[SIM STEP 3] commit real move');
          },
          reject,
        });
      this.processNextCommand();
    });
  }

  async analyzeWithSimulation(
    rack: string,
    playedMove?: string,
    simulationTimeSeconds: number = 15,
  ): Promise<{ bestMoves: string[]; rawOutput: string }> {
    if (!this.macondoInstance) {
      throw new Error('Macondo not initialized');
    }

    return new Promise((resolve, reject) => {
      // const timeout = setTimeout(() => {
      //   reject(new Error('Analyze timeout'));
      // }, (simulationTimeSeconds + 20) * 1000);

      // Komenda 1: setup
      this.commandQueue.push({
        command: [`rack ${rack}`, 'gen 20'].join('\n') + '\n',
        resolve: (result) => {
          console.log('[SIM STEP 1] Setup complete');
        },
        reject,
        expectedPrompts: 1,
      });

      // Komenda 2: start symulacji
      this.commandQueue.push({
        command: 'sim -plies 5\n',
        resolve: () => {
          console.log('[SIM STEP 2] Simulation started');
        },
        reject,
      });

      // Komenda 3: stop (CZEKA 15s przed wykonaniem)
      this.commandQueue.push({
        command: 'sim stop\n',
        resolve: () => {
          console.log('[SIM STEP 3] Simulation stopped');
        },
        reject,
        delayBefore: simulationTimeSeconds * 1000,
      });

      // Komenda 4: wyniki
      this.commandQueue.push({
        command: 'sim show\n',
        resolve: (result) => {
          console.log('[SIM STEP 4] Results received');
          setTimeout(() => resolve(result), 500);
        },
        reject,
        delayBefore: 300,
      });

      if (playedMove && playedMove.trim().length > 0)
        this.commandQueue.push({
          command: `commit ${playedMove}\n`,
          resolve: (result) => {
            console.log('[SIM STEP 5] commit real move');
            console.log(result);
          },
          reject,
          delayBefore: 500,
        });

      this.processNextCommand();
    });
  }
}
