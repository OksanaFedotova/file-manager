import { rename } from 'node:fs/promises';

export default async (pathWrongName, newName) => {
  const path = pathWrongName.split('/');
  path.pop();
  const pathProperName = (`${path}/${newName}`);
   try {
      await rename(pathWrongName, pathProperName);
      console.log('file is renamed');
    } catch (e) {
      console.error(e.message);
      consoleError();
    }
}