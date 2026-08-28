/// <reference types="node" />
import 'reflect-metadata';
import 'dotenv/config';
import * as fs from 'fs';
import * as path from 'path';
import { DataSource, Repository } from 'typeorm';

import { Diagram } from '../src/diagram/diagram.entity';
import { Tag } from '../src/tag/tag.entity';

// --- config ---------------------------------------------------------------

const DEFAULT_JSON_PATH = 'C:/Users/Pawel/Downloads/wyniki-wszystkie.json';
const TOTAL_ITEMS = 100;
const GROUP_COUNT = 10;
const START_DATE = '2026-09-20';
const CHALLENGE_TAG_NAME = 'challenge';
const LEXICON = 'osps52';

// --- cli args --------------------------------------------------------------

const args = process.argv.slice(2);
const COMMIT = args.includes('--commit');
const JSON_PATH = args.find((a) => !a.startsWith('--')) || DEFAULT_JSON_PATH;

// --- source json shape -----------------------------------------------------

interface SourceWord {
  index: number;
  coordinates: string;
  points: number;
  word: string;
  freeLetters: string;
  evaluate: number;
}

interface SourceItem {
  letters: string;
  words: SourceWord[];
  solution: SourceWord;
}

// --- helpers -----------------------------------------------------------------

function formatDate(base: Date, offsetDays: number): string {
  const d = new Date(base.getTime());
  d.setUTCDate(d.getUTCDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

async function findOrCreateTag(tagRepo: Repository<Tag>, name: string): Promise<Tag> {
  let tag = await tagRepo.findOne({ where: { name } });
  if (!tag) {
    tag = tagRepo.create({ name });
    await tagRepo.save(tag);
  }
  return tag;
}

// --- main --------------------------------------------------------------------

async function main() {
  console.log(`Reading source data from ${JSON_PATH}`);
  const raw = fs.readFileSync(JSON_PATH, 'utf-8');
  const allItems: SourceItem[] = JSON.parse(raw);

  if (allItems.length < TOTAL_ITEMS) {
    throw new Error(`Expected at least ${TOTAL_ITEMS} items in source file, found ${allItems.length}`);
  }
  const items = allItems.slice(0, TOTAL_ITEMS);
  const baseDate = new Date(`${START_DATE}T00:00:00.000Z`);

  const buildDiagramData = (item: SourceItem, challengeTag: { name: string }, dateTag: { name: string }) => ({
    isPublic: false,
    level: 0,
    lexicon: LEXICON,
    letters: item.letters,
    words: JSON.stringify(item.words.map((w) => ({ coordinates: w.coordinates, word: w.word }))),
    solution: JSON.stringify(item.solution),
    tags: [challengeTag, dateTag],
  });

  if (!COMMIT) {
    console.log('DRY RUN (pass --commit to actually write to the database)\n');
    for (let group = 0; group < GROUP_COUNT; group++) {
      const dateTagName = formatDate(baseDate, group);
      const groupItems = items.filter((_, idx) => idx % GROUP_COUNT === group);
      console.log(`Group ${group}: tag "${dateTagName}" -> ${groupItems.length} diagrams`);
    }
    const sample = buildDiagramData(items[0], { name: CHALLENGE_TAG_NAME }, { name: formatDate(baseDate, 0) });
    console.log('\nSample diagram payload (item 0):');
    console.log(JSON.stringify(sample, null, 2));
    return;
  }

  const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.DB_GCG_IMPORT_URL || process.env.DB_GCG_URL,
    ssl: { rejectUnauthorized: false },
    entities: [path.join(__dirname, '../src/**/*.entity.ts')],
    synchronize: false,
  });
  await dataSource.initialize();

  const diagramRepo = dataSource.getRepository(Diagram);
  const tagRepo = dataSource.getRepository(Tag);

  try {
    const challengeTag = await findOrCreateTag(tagRepo, CHALLENGE_TAG_NAME);
    let totalCreated = 0;

    for (let group = 0; group < GROUP_COUNT; group++) {
      const dateTagName = formatDate(baseDate, group);
      const groupItems = items.filter((_, idx) => idx % GROUP_COUNT === group);
      const dateTag = await findOrCreateTag(tagRepo, dateTagName);

      const diagrams = groupItems.map((item) => diagramRepo.create(buildDiagramData(item, challengeTag, dateTag)));
      await diagramRepo.save(diagrams);

      totalCreated += diagrams.length;
      console.log(`Group ${group}: tag "${dateTagName}" -> ${diagrams.length} diagrams created`);
    }

    console.log(`\nCreated ${totalCreated} diagrams across ${GROUP_COUNT} date tags (+ shared "${CHALLENGE_TAG_NAME}" tag).`);
  } finally {
    await dataSource.destroy();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
