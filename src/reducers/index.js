import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import menuReducer from './menu'
import authReducer from './auth'
import currentUserReducer from './currentUser'
import articlesReducer from './articles'
import commentsReducer from './comments'
import settingsReducer from './settings'
import pagesReducer from './pages'
import contentReducer from './content'
import usersReducer from './users'
import notificationsReducer from './notifications'
import toastsReducer from './toasts'
import clientsReducer from './clients'


export default combineReducers({
  menu: menuReducer,
  auth: authReducer,
  currentUser: currentUserReducer,
  articles: articlesReducer,
  comments: commentsReducer,
  settings: settingsReducer,
  pages: pagesReducer,
  router: routerReducer,
  content: contentReducer,
  users: usersReducer,
  notifications: notificationsReducer,
  toasts: toastsReducer,
  clients: clientsReducer
})