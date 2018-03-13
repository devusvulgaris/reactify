import {START, SUCCESS, FAIL} from "../constants"

import {addToast} from "../AC";

export default store => next => action => {
  const {postApi, contentType, method, content, jwtToken, csrfToken, type, toast, ...rest} = action

  if (!postApi) return next(action)

  let config = null

  if (jwtToken) {
    config = {
      method: method,
      headers: {
        'Content-type': contentType ? contentType : 'application/json',
        'Authorization': `Bearer ${jwtToken}`,
        'X-CSRF-Token': csrfToken
      },
      body: content? JSON.stringify(content) : null
    }
  }

  next({...rest, type: type + START})

  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response)
    }

    return response.json().then(json => {
      const error = new Error(json.message || response.statusText)
      return Promise.reject(Object.assign(error, { response }))
    })
  }


  function handleErrors(response) {
    if (!response.ok) {
      response.json().then(errRes => {
        throw new Error(errRes.statusText);
      })
    } else {}
    return response;
  }

  fetch(postApi, config)
      .then(checkStatus)
      .then((res) => res.text())
      .then((text) => text.length ? JSON.parse(text) : {})
      //.then(res => res.json())
      .then(response => {
        store.dispatch(addToast({type: 'success', toastAction: type, response}))
        return next({...rest, type: type + SUCCESS, response})
      })
       // dispatch(addToast() })
      .catch(error => {
        store.dispatch(addToast({type: 'error', toastAction: type, error: error.message}))
        return next({...rest, type: type + FAIL, error})})
}
