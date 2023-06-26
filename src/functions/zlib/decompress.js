import fs from 'fs';
import zlib from 'zlib';
import consoleError from '../../utils/consoleError.js';
import checkAccess from '../../utils/checkAccess.js';
import consoleExist from '../../utils/consoleExist.js';

export default async (pathToFile, pathToDestination) => {
  return new Promise(async (resolve, reject) => {
    const fileName = pathToFile.split('/').pop().split('.');
    fileName.pop();
    const readStream = fs.createReadStream(pathToFile);
    readStream.on('error', (error) => {
      console.error(error.message);
      consoleError();
    });
    const newFile = `${pathToDestination}/${fileName.join('.')}`;
    if (!await checkAccess(newFile)) {
      const writeStream = fs.createWriteStream(newFile);
      writeStream.on('error', (error) => {
        console.error(error.message);
        consoleError();
      });
      const brotli = zlib.createBrotliDecompress();
      const stream = readStream.pipe(brotli).pipe(writeStream);
      stream.on('finish', () => {
        console.log('File is decompressed');
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