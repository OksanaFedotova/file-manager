import { cpus } from 'os';
export default () => {
  console.log(cpus());
}