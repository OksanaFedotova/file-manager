import up from "../functions/up.js"
import cd from "../functions/cd.js"
import ls from "../functions/ls.js"
import cat from "../functions/cat.js"
import add from "../functions/add.js"
import rn from "../functions/rn.js"
import cp from "../functions/cp.js"
import mv from "../functions/mv.js"
import rm from "../functions/rm.js"

export default (line) => {
  const [command, ...args] = line.split(' ');
  const commands = {
    'up': up,
    'cd': () => cd(...args),
    'ls': ls,
    'cat': () => cat(...args),
    'add': () => add(...args),
    'rn': () => rn(...args),
    'cp': () => cp(...args),
    'mv': () => mv(...args), 
    'rm': () => rm(...args),
  }
  return commands[command];
}