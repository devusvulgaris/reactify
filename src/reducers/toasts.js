import {
  ADD_CONTENT,
  ADD_USER,
  LOAD_USERS,
  UPDATE_USER,
  DELETE_USER,
  START,
  SUCCESS,
  FAIL,
  ADD_TOAST, REMOVE_TOAST
} from '../constants'

export default (toastsState = [], action) => {
  switch(action.type) {
   /* case DELETE_USER + SUCCESS:
      return {
        ...toastsState,
        items: [...toastsState.items, {
          text: 'user deleted',
          type: 'success'
        }]
      }

    case ADD_USER + SUCCESS:
      return {
        ...toastsState,
        items: [...toastsState.items, {
          text: 'user added',
          type: 'success'
        }]
      } */

    case ADD_TOAST:
      return [action.payload, ...toastsState]


    case REMOVE_TOAST:
        return toastsState.filter(toast => toast.id !== action.payload);
  }
  return toastsState
}