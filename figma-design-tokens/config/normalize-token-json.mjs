import fs from 'fs';
import path from 'path';
import TokenJson from '../input/tokens.json' assert { type: 'json' };
import chalk from 'chalk';

const __dirname = path.resolve();
const core = TokenJson.BLR_COR;
const sem = TokenJson.BLR_SEM;
const modifiedSemString = JSON.stringify(sem)
  .replaceAll('{Label', '{semantic.Label')
  .replaceAll('{Action', '{semantic.Action');
const semModified = JSON.parse(modifiedSemString);

if (typeof core == 'undefined' || typeof sem === 'undefined') {
  throw new Error(chalk.redBright('token.json has wrong format.'));
}

const flattenedJson = { ...core, semantic: semModified };

const string = JSON.stringify(flattenedJson);

console.log(chalk.cyanBright('\n🧵🪡 normalize token.json...\n'));

fs.writeFileSync(`${__dirname}/figma-design-tokens/input/tokens.normalized.json`, string, 'utf-8');
