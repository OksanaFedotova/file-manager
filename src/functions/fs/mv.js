import { unlink } from 'node:fs/promises';
import cp from './cp.js';
import consoleError from '../../utils/consoleError.js';

 export default async (pathToFile, pathToNewDir) => {
  console.log(pathToFile, pathToNewDir);
  try {
    await cp(pathToFile, pathToNewDir, false);
    await unlink(pathToFile);
    console.log('File is moved');
  } catch(e) {
    console.error(e);
    consoleError();
  }
 }