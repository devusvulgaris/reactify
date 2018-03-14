import {
  LOAD_MENU,
  REGISTER_USER,
  GET_CSRF_TOKEN,
  LOAD_COMMENTS,
  LOGOUT,
  START,
  SUCCESS,
  FAIL,
  LOAD_PAGE,
  DELETE_CONTENT,
  LOAD_USERS,
  ADD_USER,
  DELETE_USER,
  ADD_TOAST,
  REMOVE_TOAST,
} from "../constants"

import store from '../store'

export function loadMenu() {
  return {
    type: LOAD_MENU,
    callApi: 'http://reactify.dd:8083/rest/menu/main?_format=json'
  }
}

export function registerUser(userCreds) {
  return dispatch => {
    dispatch(getToken())

    fetch('http://reactify.dd:8083/rest/session/token')
        .then(res => res.text())
        .then(token => {
              dispatch({
                type: 'REGISTER_START',
                token: token,
                creds: JSON.stringify(userCreds)
              })
              fetch('http://reactify.dd:8083/user/register?_format=json',
                  {
                    method: 'POST',
                    headers: {
                      'Content-type': 'application/json',
                      'X-CSRF-Token': token
                    },
                    body: JSON.stringify(userCreds)
                  })
                  .then(res => {
                    if (res.status >= 400) {
                      // res.json()
                      throw new Error(res.statusText)
                    }
                    res.json()
                  })
                  .then(response => {
                    dispatch({
                      type: 'REGISTER_SUCCESS',
                      response
                    })
                    console.log(response)
                  })
                  .catch(error => {
                    dispatch({
                      type: 'REGISTER_FAIL',
                      error: error.message
                    })
                    console.error(error.statusText)
                  })

              console.log(token)
            }
        )
        .catch(error => {
          dispatch({
            type: 'TOKEN_FAIL',
            error
          })
        })


    /* type: REGISTER_USER,
     register: true,
     callApi: 'http://reactify.dd:8083/user/register?_format=json',
     userInfo: JSON.stringify(state) */
  }
}

export function getToken() {
  return {
    type: GET_CSRF_TOKEN,
    tokenUrl: 'http://reactify.dd:8083/rest/session/token'
  }
}

// Login actions

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function startLogin(credentials) {
  return {
    type: LOGIN_START,
    isFetching: true,
    isAuthenticated: false,
    credentials
  }
}

export function successLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export function loginError(message) {
  return {
    type: LOGIN_FAIL,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function saveCSRFToken(token) {
  return {
    type: 'SAVE_CSRF',
    token: token
  }
}

// Get a token and dispatch actions.
export function userLogin(credentials) {

  return dispatch => {
    dispatch(getToken)

    fetch('http://reactify.dd:8083/rest/session/token')
        .then(res => res.text())
        .then(token => {
          dispatch(saveCSRFToken(token))
          dispatch(startLogin(credentials))

          fetch('http://reactify.dd:8083/api/token?_format=json', {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
              'X-CSRF-Token': token
            },
            body: JSON.stringify(credentials)
          })
              .then(res => {
                if (!res.ok) {
                  res.json().then(res => {
                    dispatch(loginError(res.message))
                    throw new Error(res.message)
                  })
                } else {
                  res.json().then(user => {
                    dispatch(successLogin(user))

                    localStorage.setItem('jwt_token', user.token)
                    localStorage.setItem('user_id', user.id)

                   // dispatch(getJwt(user))
                    console.log(user)
                  })
                }
              }).catch(err => console.error('Error in fetch: ', err.message))

        }).catch(err => console.log('Error getting token: ', err))
  }
}

export function getJwt(user) {
  //let token = user.csrf_token
  return (dispatch) => {
    dispatch({
      type: 'JWT_START',
      user
    })

    fetch('http://reactify.dd:8083/jwt/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRF-Token': user.csrf_token
      },
    }).then(res => {
      if(!res.ok) {
        res.json().then(res => {
          dispatch(jwtError(res))
          throw new Error(res.message)
        })
      } else {
        return res.json()
      }
    }).then(response => {
          dispatch({
            type: 'JWT_RECEIVED',
            response
          })
          //localStorage
          console.log(response)
        }).catch(err => console.warn(err))

  }
}

export function jwtError(res) {
  return {
    type: 'JWT_FAILED',
    res
  }
}

/**
 * Logout actions
 */
function requestLogout() {
  return {
    type: LOGOUT + START,
    isFetching: false,
    isAuthenticated: false
  }
}

export function successLogout() {
  return {
    type: LOGOUT + SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('jwt_token')
    localStorage.removeItem('user_id')
    dispatch(successLogout())
  }
}


//Contact form
function submitSuccessful(result) {
  return {
    type: 'SUBMIT_CONTACT_FORM',
    result
  }
}

export function submitContactForm(data) {

return dispatch => {
const csrfToken = store.getState().auth.csrfToken
  console.warn(csrfToken)

  const additionalData = {

    "contact_form":[{"target_id":"feedback"}],
      "uuid": [{"target_id": "feedback" }],
      //"name":[{"value":"SENDER_NAME_VALUE"}],

  }

  let modifyFormData = (prop, obj, newObj) => {
    newObj[prop] = [{"value": obj[prop]}]
    console.log(JSON.stringify(newObj))

  }

  const formValues = data
  let newFormValues = {}
  for (let prop in formValues) {
  if(formValues.hasOwnProperty(prop)) {
    modifyFormData(prop, formValues, newFormValues)
  }
  }



  const formData = {
      ...additionalData,
      ...newFormValues
  }

  fetch('http://reactify.dd:8083/entity/contact_message?_format=json',
      {
        method: 'POST',
        headers: {
          'X-CSRF-Token': csrfToken,
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData)
      }).then(res => {
    if (!res.ok) {
      res.json().then(res => {
        //dispatch(loginError(res.message))
        throw new Error(res.message)
      })
    } else {
      res.json().then(result => {
        dispatch(submitSuccessful(result))

       // localStorage.setItem('jwt_token', user.token)

        // dispatch(getJwt(user))
        console.log(result)
      })
    }
  }).catch(err => console.error('Error in fetch: ', err.message))
}
}

// User actions
export function fetchUser() {
  return {
    type: 'FETCH_USER',
    callApi: 'http://reactify.dd:8083/user/1?_format=json'
  }
}

// Load articles
export function loadArticles() {
  return {
    type: 'LOAD_ARTICLES',
    callApi: 'http://reactify.dd:8083/api/articles?_format=json'
  }
}

// Get theme settings.
export function getThemeSettings() {
  return {
    type: 'THEME_SETTINGS',
    callApi: 'http://reactify.dd:8083/api/theme_settings?_format=json'
  }
}


// Load comments based on entity id.
export function loadArticleComments(articleId) {
  return {
    type: LOAD_COMMENTS,
    callApi: `http://reactify.dd:8083/api/comments/${articleId}?_format=json`
  }
}

// Load page
export function loadPage(pageId, pageName) {
  return {
    type: LOAD_PAGE,
    callApi: `http://reactify.dd:8083/node/${pageId}?_format=json`,
    id : pageId,
    pageName: pageName
  }
}

// App setup.
export function appSetup() {
  return dispatch => {
    dispatch(getThemeSettings())
    console.log('Dispatched!!')

  }
}

// Content in admin area.
export function loadContent() {
  return {
    type: 'LOAD_CONTENT',
    callApi: 'http://reactify.dd:8083/api/content?_format=json',
    jwtToken: localStorage.getItem('jwt_token')
  }
}

export function addContent(content) {
  return {
    type: 'ADD_CONTENT',
    postApi: 'http://reactify.dd:8083/entity/node?_format=hal_json',
    method: 'POST',
    jwtToken: localStorage.getItem('jwt_token'),
    contentType: 'application/hal+json',
    csrfToken: store.getState().auth.csrfToken,
    content: content
  }
}

// Admin actions.
export function updateContent(content, id) {
  return {
    type: 'UPDATE_CONTENT',
    id: id,
    jwtToken: localStorage.getItem('jwt_token'),
    postApi: `http://reactify.dd:8083/node/${id}/?_format=json`,
    method: 'PATCH',
    csrfToken: store.getState().auth.csrfToken,
    content: content,
    redirect: true
  }
}

export function deleteContent(id) {
  return {
    type: DELETE_CONTENT,
    id: id,
    jwtToken: localStorage.getItem('jwt_token'),
    postApi: `http://reactify.dd:8083/node/${id}/?_format=json`,
    method: 'DELETE',
    csrfToken: store.getState().auth.csrfToken,
    redirect: true
  }
}

// Users in admin area.
export function loadUsers() {
  return {
    type: LOAD_USERS,
    callApi: 'http://reactify.dd:8083/api/users?_format=json',
    jwtToken: localStorage.getItem('jwt_token')
  }
}

export function addUser(user) {
  return {
    type: ADD_USER,
    postApi: 'http://reactify.dd:8083/entity/user?_format=hal_json',
    method: 'POST',
    jwtToken: localStorage.getItem('jwt_token'),
    contentType: 'application/hal+json',
    csrfToken: store.getState().auth.csrfToken,
    content: user
  }
}

export function updateUser(content, id) {
  return {
    type: 'UPDATE_USER',
    id: id,
    jwtToken: localStorage.getItem('jwt_token'),
    postApi: `http://reactify.dd:8083/user/${id}/?_format=json`,
    method: 'PATCH',
    csrfToken: store.getState().auth.csrfToken,
    content: content,
    redirect: true
  }
}

export function deleteUser(id) {
  return {
    type: DELETE_USER,
    id: id,
    jwtToken: localStorage.getItem('jwt_token'),
    postApi: `http://reactify.dd:8083/user/${id}/?_format=json`,
    method: 'DELETE',
    csrfToken: store.getState().auth.csrfToken,
    redirect: true
  }
}

export function toggleNotificationBar() {
  return {
    type: 'TOGGLE_NOTIFICATION_BAR'
  }
}
let toastId = 0

export function addToast(options = {}) {
  return {
    type: ADD_TOAST,
    payload: {...options,
    id: toastId++}
  }
}

export function removeToast(id) {
  console.log('works?')
  return {
    type: REMOVE_TOAST,
    payload: id
  }
}
