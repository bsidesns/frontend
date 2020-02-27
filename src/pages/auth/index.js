import changePassword from './change-password'
import login from './login'
import register from './register'
import reset from './reset'
import { Auth } from 'freenit'


export default {
  changePassword,
  initial: Auth.initial,
  login,
  register,
  reset,
  store: Auth.store,
}
