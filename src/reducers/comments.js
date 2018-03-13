import { LOAD_COMMENTS, START, FAIL, SUCCESS } from '../constants'

export default (commentsState = {
  isFetching: false,
  entityId: null,
  items: []
}, action) => {
  const { type, response } = action

  switch (type) {
    case LOAD_COMMENTS + START:
      return Object.assign({}, commentsState, {
        isFetching: true,
      })

    case LOAD_COMMENTS + SUCCESS:
      const successObj = {
        isFetching: false,
        items: response
      }
      return { ...commentsState, ...successObj }

    case LOAD_COMMENTS + FAIL:
      const failObj = {
        isFetching: false,
        message: message
      }
      return { ...commentsState, ...failObj }

  }

  return commentsState
}