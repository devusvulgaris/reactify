import {
  ADD_USER,
  LOAD_CLIENTS,
  UPDATE_USER,
  DELETE_USER,
  START,
  SUCCESS,
  FAIL
} from '../constants'

import {push} from 'react-router-redux'

export default (clientsState = {
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
    case LOAD_CLIENTS + START:
      return {
        ...clientsState,
        loading: true,
        message: {
          type: null,
          text: null
        }
      }

    case LOAD_CLIENTS + SUCCESS:
      return {
        ...clientsState,
        loading: false,
        loaded: true,
        items: clientsState.items.concat(response)
      }

    case LOAD_CLIENTS + FAIL:
      return {
        ...clientsState,
        loading: false,
        loaded: false,
      }

  /*  case UPDATE_USER + START:
      return {
        ...clientsState,
        message: {
          type: null,
          text: null
        }
      }

    case UPDATE_USER + SUCCESS:
      return {
        ...clientsState,
        message: {
          ...clientsState.message,
          text:'Content was successfully updated',
          type: 'success'
        },
        items: clientsState.items.map(item => {
          if (item.nid[0].value == response.nid[0].value) {
            return response
          }
          return item
        })
      }

    case UPDATE_USER + FAIL:
      return {
        ...clientsState,
        message: {
          ...clientsState.message,
          text: error.message,
          type: 'error'
        }
      }

    case DELETE_USER + SUCCESS:
      const contentToDeleteArr =  clientsState.items.filter(item => item.uid[0].value == id)
      return {
        ...clientsState,
        items: clientsState.items.filter(item => {
          if (item.uid[0].value != id) {
            return item
          }
        }),
        message: {
          ...clientsState.message,
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
        ...clientsState,
        message: {
          ...clientsState.message,
          text: error.message ? error.message : "Couldn't delete user",
          type: 'error'
        }
      }

    case ADD_CONTENT + START:
      return {
        ...clientsState,
        saving: true
      }
    case ADD_CONTENT + SUCCESS:
      return {
        ...clientsState,
        saving: false,
        items: [ response, ...clientsState.items],
        message: {
          ...clientsState.message,
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
        ...clientsState,
        message: {
          ...clientsState.message,
          text: error.message ? error.message : "Couldn't add user",
          type: 'error',
          error
        }
      } */
  }
  return clientsState
}