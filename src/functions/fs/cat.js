import fs from 'fs';
import streamAsPromise from '../../utils/streamAsPromise.js';
import consoleError from '../../utils/consoleError.js';

export default async (file) => {
  try {
    const data = await streamAsPromise(fs.createReadStream(file, 'utf-8'));
    console.log(data);
  } catch (e) {
    console.error(e.message);
    consoleError()
  }
};