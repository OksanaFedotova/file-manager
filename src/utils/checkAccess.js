import fs from 'fs';

export default async (path) => {
  return fs.promises.access(path, fs.constants.F_OK)
  .then(() => true)
  .catch(() => false) 
};