import {LOAD_MENU, SUCCESS, FAIL} from "../constants"

let initialMenu = {
  items:[],
  isLoading: false,
  loaded: false
}

export default ( menuState = initialMenu, action )  => {
  switch(action.type) {
    case LOAD_MENU + SUCCESS:
      return Object.assign({}, menuState, {items: action.response})
        //return menuState.concat(action.response)

    case LOAD_MENU + FAIL:
        return Object.assign({}, menuState, {error: action.error})
  }
  return menuState
}