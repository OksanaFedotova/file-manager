import { readFile } from 'node:fs/promises'; 
import { createHash } from 'node:crypto'
import consoleError from '../../utils/consoleError.js';

export default async (pathToFile) => {
  try {
    const content = await readFile(pathToFile);
    console.log(createHash('sha256').update(content).digest('hex'));
  } catch (e) {
    console.error(e);
    consoleError
  }
}