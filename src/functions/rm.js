import { unlink } from 'node:fs/promises';

export default async (pathToFile) => {
  try {
    await unlink(pathToFile);
    console.log('File is deleted');
  } catch (e) {
    console.error(e.message);
  }
}