import { userInfo } from 'os';

export default () => {
  console.log(userInfo().username)
} 