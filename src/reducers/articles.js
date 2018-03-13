/**
 * Articles reducer.
 */
import { LOAD_ARTICLES, START, SUCCESS, FAIL } from "../constants";

export default (articlesState = {
  isFetching: false,
  items: []
}, action) => {
  const { type, response } = action

  switch (type) {
    case LOAD_ARTICLES + START:
      return Object.assign({}, articlesState, {
        isFetching: true,
      })

    case LOAD_ARTICLES + SUCCESS:
      const successObj = {
        isFetching: false,
        items: response
      }
      return { ...articlesState, ...successObj }

    case LOAD_ARTICLES + FAIL:
      const failObj = {
        isFetching: false,
        message: message
      }
      return { ...articlesState, ...failObj }

  }

  return articlesState
}