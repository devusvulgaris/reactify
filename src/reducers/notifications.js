import {
  ADD_CONTENT,
  ADD_USER,
  LOAD_USERS,
  UPDATE_USER,
  DELETE_USER,
  START,
  SUCCESS,
  FAIL
} from '../constants'

export default (notificationsState = {
items: []
}, action) => {
  switch(action.type) {
    case DELETE_USER +SUCCESS:
      return {
          ...notificationsState,
        items: [...notificationsState.items, {
            text: 'user deleted',
            type: 'success'
        }]
      }

    case ADD_USER + SUCCESS:
      return {
        ...notificationsState,
        items: [...notificationsState.items, {
          text: 'content deleted',
          type: 'success'
        }]
      }
  }
  return notificationsState
}