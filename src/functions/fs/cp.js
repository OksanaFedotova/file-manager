import fs from 'fs';
import { pipeline } from "node:stream/promises";
import consoleError from '../../utils/consoleError.js';

export default async (pathToFile, pathToNewDir, log = true) => {
  const fileName = pathToFile.split('/').pop();
  const rs = fs.createReadStream(pathToFile)
  const ws = fs.createWriteStream(`${pathToNewDir}/${fileName}`);
  try {
    await pipeline(rs, ws);
    log ? console.log('File is copied') : null;
  } catch (e) {
    console.error(e);
    consoleError()
  }
}