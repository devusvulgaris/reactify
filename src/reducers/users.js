import {
  ADD_USER,
  LOAD_USERS,
  UPDATE_USER,
  DELETE_USER,
  START,
  SUCCESS,
  FAIL
} from '../constants'

import {push} from 'react-router-redux'

export default (usersState = {
  loading: false,
  loaded: false,
  items: [],
  message: {
    type: null,
    text: null
  }
}, action) => {
  const {type, id, response, error} = action

  switch(type) {
    case LOAD_USERS + START:
      return {
        ...usersState,
        loading: true,
        message: {
          type: null,
          text: null
        }
      }

    case LOAD_USERS + SUCCESS:
      return {
        ...usersState,
        loading: false,
        loaded: true,
        items: usersState.items.concat(response)
      }

    case LOAD_USERS + FAIL:
      return {
        ...usersState,
        loading: false,
        loaded: false,
        message: {
          ...usersState.message,
          text: error.message,
          type: 'error'
        }
      }

    case UPDATE_USER + START:
      return {
        ...usersState,
        message: {
          type: null,
          text: null
        }
      }

    case UPDATE_USER + SUCCESS:
      return {
        ...usersState,
        message: {
          ...usersState.message,
          text:'Content was successfully updated',
          type: 'success'
        },
        items: usersState.items.map(item => {
          if (item.nid[0].value == response.nid[0].value) {
            return response
          }
          return item
        })
      }

    case UPDATE_USER + FAIL:
      return {
        ...usersState,
        message: {
          ...usersState.message,
          text: error.message,
          type: 'error'
        }
      }

    case DELETE_USER + SUCCESS:
      const contentToDeleteArr =  usersState.items.filter(item => item.uid[0].value == id)
      return {
        ...usersState,
        items: usersState.items.filter(item => {
          if (item.uid[0].value != id) {
            return item
          }
        }),
        message: {
          ...usersState.message,
          text: `${contentToDeleteArr[0].name[0].value} deleted`,
          type: 'success'
        },
        toast: {
          type: 'success',
          text: 'User successfully added'
        }
      }

    case DELETE_USER + FAIL:
      return {
        ...usersState,
        message: {
          ...usersState.message,
          text: error.message ? error.message : "Couldn't delete user",
          type: 'error'
        }
      }

    case ADD_USER + START:
      return {
          ...usersState,
          saving: true
      }
    case ADD_USER + SUCCESS:
      return {
        ...usersState,
        saving: false,
        items: [ response, ...usersState.items],
        message: {
          ...usersState.message,
          text: "User successfully added",
          type: 'success',
        },
        toast: {
          type: 'success',
          text: 'User successfully added'
        }
      }

    case ADD_USER + FAIL:
      return {
        ...usersState,
        message: {
          ...usersState.message,
          text: error.message ? error.message : "Couldn't add user",
          type: 'error',
          error
        }
      }
  }
  return usersState
}