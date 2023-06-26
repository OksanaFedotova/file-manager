export default (line) => {
  let res;
  if (line.includes('\\')) {
    res = line
      .replaceAll(/\\ /gm, 'specialTemporaryPhraseForParsing')
      .split(' ')
      .map((el) => el.replaceAll('specialTemporaryPhraseForParsing', ' '))
      .filter((el) => el !== ' ' && el !== '')
  } else {
    res = line 
      .replaceAll(`"`, "'")
      .split(`'`)
      .filter((el) => el !== ' ' && el !== '')
      .map((el) => el.trim());
  }
  return res;
}