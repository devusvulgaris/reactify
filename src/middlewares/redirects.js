import {push} from 'react-router-redux'

export default store => next => action => {
  const {redirect, type, id} = action
  if (!redirect) return next(action)

  if (type === 'DELETE_CONTENT_SUCCESS') {
    store.dispatch(push('/dashboard/content'))
  }

  if (type === 'UPDATE_CONTENT_SUCCESS') {
    store.dispatch(push(`/dashboard/content/${id}/view`))
  }
  return next(action)
}