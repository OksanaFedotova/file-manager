import { cwd } from "node:process";

export default () => console.log(`You are currently in ${cwd()}`);
