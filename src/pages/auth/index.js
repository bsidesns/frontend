import login from './login'
import { Auth } from 'freenit'


export default {
  changePassword: Auth.changePassword,
  initial: Auth.initial,
  login,
  register: Auth.register,
  reset: Auth.reset,
  store: Auth.store,
}
