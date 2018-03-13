import jwt_decode from 'jwt-decode'
import {addToast, logoutUser, successLogout} from "../AC";
import {ADD_TOAST, START} from "../constants";

export default store => next => action => {
  const {type, toast, ...rest} = action
  if (!toast) return next(action)
 //console.error('toast dispatched')
  //store.dispatch(addToast())

  next({type: ADD_TOAST, toast})

}
