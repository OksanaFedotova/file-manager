import fs from 'fs';
import { cwd } from "node:process";
import consoleError from '../../utils/consoleError.js';

export default async () => {
  try {
    const files = await fs.promises.readdir(cwd(), {withFileTypes: true})
    const table = files.reduce((acc, file, i) =>  ({...acc,
        [i]: {name: file.name, type: file.isDirectory() ? "directory" : "file"}
      }), {});
    console.table(table);
  } catch(err) {
    console.error(e);
    consoleError();
  }
}