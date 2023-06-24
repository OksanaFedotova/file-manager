import consoleError from '../../utils/consoleError.js';

export default (directory) => {
  try {
    process.chdir(directory);
  } catch (error) {
    console.error(error);
    consoleError();
  }
}