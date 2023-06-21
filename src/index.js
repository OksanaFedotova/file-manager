import os from 'os';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { chdir } from 'node:process';
import logWelcome from './utils/logWelcome.js';
import logCWD from './utils/logCWD.js';
import exit from './utils/exit.js';
import getCommand from './utils/getCommand.js';

const start = () => {
  const userHomeDir = os.homedir();
  chdir(userHomeDir);
  const userNameArr = process.argv[2].split('=');
  const userName = userNameArr[userNameArr.length - 1];
  logWelcome(userName);
  logCWD();
  const rl = readline.createInterface({ input, output });
  rl.on('line', (line) => { 
    if(line === '.exit') {
      exit(userName);
    } else {
      getCommand(line)();
      logCWD();
    }
  });
  rl.on('close', () => exit(userName));
}
start();
