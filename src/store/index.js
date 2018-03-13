import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import api from '../middlewares/api'
import postApi from '../middlewares/postApi'
import redirects from '../middlewares/redirects'
import checkAuth from '../middlewares/checkAuth'
import toasts from '../middlewares/toasts'
import {routerMiddleware} from 'react-router-redux'
import history from '../components/history'

import reducer from '../reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(applyMiddleware(thunk, api, postApi, redirects, toasts, routerMiddleware(history), checkAuth))

const store = createStore(reducer, {}, enhancer)

window.store = store

export default store