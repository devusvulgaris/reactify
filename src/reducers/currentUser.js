import {FETCH_USER, START, SUCCESS, FAIL} from "../constants"

export default ( userState = {
  userLoading: false,
  userLoaded: false
}, action )  => {
  const { type, response } = action
  switch (type) {
    case FETCH_USER + START:
      return {
          ...userState,
           userLoading: true
      }

    case FETCH_USER + SUCCESS:
      return {...userState,
            userLoading: false,
            userLoaded: true,
            user: response
     }

    case FETCH_USER + FAIL:
      return Object.assign({}, userState, {
        userLoading: false,
        userLoaded: false,
        error: action.error
      })
  }
  return userState
}