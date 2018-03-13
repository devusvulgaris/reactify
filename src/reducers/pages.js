import {
  LOAD_PAGE,
  START,
  SUCCESS,
  FAIL
} from "../constants"
import { LOCATION_CHANGE } from 'react-router-redux'

export default (pageState = {
  frontpageLoaded: false,
  aboutpageLoaded: false,
  aboutpageLoading: false,
  frontpageLoading: false,
  items: []
}, action) => {
  const { type, response, id, pageName, message } = action

  switch(type) {
    case LOAD_PAGE + START:
      if (pageName == 'about') {
        return Object.assign({}, pageState, {
          aboutpageLoading: true,
          //pageLoaded: false,
          // items: []
        })
      }

      if (pageName == 'front') {
        return Object.assign({}, pageState, {
          frontpageLoading: true,
          //pageLoaded: false,
          // items: []
        })
      }

    case LOAD_PAGE + SUCCESS:
     // const loadedResponse = Object.assign({}, response, {pageLoaded: true})
        response.pageLoaded = true

      if (pageName == 'front') {
        return Object.assign({}, pageState, {
          homepageLoading: false,
          frontpageLoaded: true,
          items: pageState.items.concat(response)
        })
      }

      if (pageName == 'about') {
        return Object.assign({}, pageState, {
          aboutpageLoadeing: false,
          aboutpageLoading: false,
          aboutpageLoaded: true,
          items: pageState.items.concat(response)
        })
      }

    case LOAD_PAGE + FAIL:
      return {
        ...pageState, ...{
          frontpageLoading: false,
          aboutpageLoading: false,

          message: message
        }
      }

      //case LOCATION_CHANGE:
      //console.warn('Location change', action.payload)
      //return pageState
  }
  return pageState
}