import { open } from 'node:fs/promises';
import { cwd } from "node:process";
import consoleError from '../../utils/consoleError.js';

export default async (name) => {
  try {
    const fd = await open(`${cwd()}/${name}`, 'wx');
    await fd.close();
    console.log('file is added');
  } catch (e) {
    console.error(e.message);
    consoleError
  }
}
