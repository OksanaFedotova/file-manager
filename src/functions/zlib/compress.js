import fs from 'fs';
import zlib from 'zlib';
import consoleError from '../../utils/consoleError.js';

export default async (pathToFile, pathToDestination) => {
  return new Promise((resolve, reject) => {
    const fileName = pathToFile.split('/').pop();
    const readStream = fs.createReadStream(pathToFile);
    readStream.on('error', (error) => {
      console.error(error.message);
      consoleError();
    });
    const writeStream = fs.createWriteStream(`${pathToDestination}/${fileName}.br`);
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
    });;
  })
}