import { unlink } from 'node:fs/promises';
import consoleError from '../../utils/consoleError.js';

export default async (pathToFile) => {
  try {
    await unlink(pathToFile);
    console.log('File is deleted');
  } catch (e) {
    console.error(e.message);
    consoleError();
  }
}