import jwt_decode from 'jwt-decode'
import {logoutUser, successLogout} from "../AC";
import {START} from "../constants";

export default store => next => action => {
  const {type, ...rest} = action
  const token = localStorage.getItem('jwt_token');
  console.log(token)
  if (!token) return next(action)

  if(token && jwt_decode(token).exp < Date.now() / 1000) {
    console.log('old token')
   // next({...rest, type: 'LOGOUT_SUCCESS'})
    if (action.type !== 'LOGOUT_SUCCESS') {
      localStorage.removeItem('jwt_token')
      localStorage.removeItem('user_id')
      store.dispatch(successLogout())
    }
  }

  return next(action)
}
