import { rename } from 'node:fs/promises';
import consoleError from '../../utils/consoleError.js';
import checkAccess from '../../utils/checkAccess.js';
import consoleExist from '../../utils/consoleExist.js';
import { resolve } from "node:path";

export default async (pathWrongName, newName) => {
  const path = pathWrongName.split('/');
  path.pop();
  const pathProperName = resolve(`${path}/${newName}`);
  if (!await checkAccess(pathProperName)) {
    try {
      await rename(pathWrongName, pathProperName);
      console.log('File is renamed');
    } catch (e) {
      console.error(e.message);
      consoleError();
    }
  } else {
    consoleExist();
  }
}