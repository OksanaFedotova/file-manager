import fs from 'fs';
import { pipeline } from "node:stream/promises";
import consoleError from '../../utils/consoleError.js';
import checkAccess from '../../utils/checkAccess.js';
import consoleExist from '../../utils/consoleExist.js';
import { resolve } from "node:path";

export default async (pathToFile, pathToNewDir, log = true) => {
  const fileName = pathToFile.split('/').pop();
  const rs = fs.createReadStream(pathToFile);
  rs.on('error', (error) => {
      console.error(error.message);
      consoleError();
    });
  const newPath = resolve(`${pathToNewDir}/${fileName}`);
  const ws = fs.createWriteStream(newPath);
  ws.on('error', (error) => {
      console.error(error.message);
      consoleError();
    });
  if (!await checkAccess(newPath)) {
      try {
      await pipeline(rs, ws);
      log ? console.log('File is copied') : null;
    } catch (e) {
      console.error(e);
      consoleError();
    }
  } else {
    consoleExist();
  }
}