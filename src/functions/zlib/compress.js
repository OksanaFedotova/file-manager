import fs from 'fs';
import zlib from 'zlib';
import consoleError from '../../utils/consoleError.js';
import checkAccess from '../../utils/checkAccess.js';
import consoleExist from '../../utils/consoleExist.js';
import path from "path";

export default async (pathToFile, pathToDestination) => {
  return new Promise(async (resolve, reject) => {
    const fileName = pathToFile.split('/').pop();
    const readStream = fs.createReadStream(pathToFile);
    readStream.on('error', (error) => {
      console.error(error.message);
      consoleError();
    });
    const fileCompressed = path.resolve(`${pathToDestination}/${fileName}.br`);
    if (!await checkAccess(fileCompressed)) {
        const writeStream = fs.createWriteStream(fileCompressed);
        writeStream.on('error', (error) => {
        console.error(error.message);
        consoleError();
      });
      const brotli = zlib.createBrotliCompress();
      const stream = readStream.pipe(brotli).pipe(writeStream);
      stream.on('finish', () => {
        console.log('File is compressed');
        resolve();
      });
      stream.on('error', (error) => {
        console.error(error.message);
        consoleError();
      });
    } else {
      consoleExist();
    }
  })
}