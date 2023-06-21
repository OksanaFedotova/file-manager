import up from "../functions/up.js"

export default (line) => {
  const commands = {
    'up': up,
  }
  return commands[line];
}