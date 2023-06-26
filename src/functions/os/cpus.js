import { cpus } from 'os';
export default () => {
  console.log(cpus().map(({ model, speed }) => {
      speed = `${speed / 1000} GHz`;
      return { model, speed };
    }));
}