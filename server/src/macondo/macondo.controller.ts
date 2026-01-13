import { Controller, Post, Body } from '@nestjs/common';
import { MacondoService } from '../macondo/macondo.service';

@Controller('analyze')
export class MacondoController {
  constructor(private readonly macondoService: MacondoService) {}

  @Post()
  async analyze(@Body() data: { rack: string; playedMove: string; moveIndex: number }) {
    const result = await this.macondoService.analyzeWithSimulation(data.rack, data.playedMove);
    return { ...result, moveIndex: data.moveIndex };
  }
  @Post('/simple')
  async simpleAnalyze(@Body() data: { rack: string; playedMove: string; moveIndex: number }) {
    const result = await this.macondoService.analyze(data.rack, data.playedMove);
    return { ...result, moveIndex: data.moveIndex };
  }
}
