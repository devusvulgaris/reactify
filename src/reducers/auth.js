/**
 * The auth reducer.
 */
import { LOGIN, START, SUCCESS, FAIL, LOGOUT } from "../constants";

export default (authState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('jwt_token') ? true : false

}, action) => {
  const { type, credentials, user, message, token } = action

  switch (type) {
    case LOGIN + START:
      return Object.assign({}, authState, {
        isFetching: true,
        isAuthenticated: false,
        user: credentials
      })

    case LOGIN + SUCCESS:
      const successObj = {
        isFetching: false,
        isAuthenticated: true,
        user: user
      }
      return { ...authState, ...successObj}

    case LOGIN + FAIL:
      const failObj = {
        isFetching: false,
        isAuthenticated: false,
        message: message
      }
      return { ...authState, ...failObj }

    case LOGOUT + SUCCESS:
      const logoutObj = {
        isFetching: false,
        isAuthenticated: false
      }
      return { ...authState, ...logoutObj }

    case 'SAVE_CSRF':
      return { ...authState, csrfToken: token}
  }

  return authState
}