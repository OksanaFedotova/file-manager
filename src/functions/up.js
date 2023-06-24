export default () => {
  try {
    process.chdir('..');
  } catch (error) {
    console.error(error);
    consoleError();
  }
}