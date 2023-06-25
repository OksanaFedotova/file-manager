import up from "../functions/fs/up.js"
import cd from "../functions/fs/cd.js"
import ls from "../functions/fs/ls.js"
import cat from "../functions/fs/cat.js"
import add from "../functions/fs/add.js"
import rn from "../functions/fs/rn.js"
import cp from "../functions/fs/cp.js"
import mv from "../functions/fs/mv.js"
import rm from "../functions/fs/rm.js"
import eol from "../functions/os/eol.js";
import cpus from "../functions/os/cpus.js"
import homedir from "../functions/os/homedir.js"
import username from "../functions/os/username.js"
import hash from "../functions/hash/hash.js"
import compress from "../functions/zlib/compress.js"
import decompress from "../functions/zlib/decompress.js"

export default (line) => {
  let [command, ...args] = line.split(' ');
  command = args[0]?.includes('--') ? args[0].replace('--', '') : command
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
    'eol': () => eol(),
    'cpus': () => cpus(),
    'homedir': () => homedir(),
    'username': () => username(),
    'hash': () => hash(...args),
    'compress': () => compress(...args),
    'decompress': () => decompress(...args),
  }
  return commands[command];
}