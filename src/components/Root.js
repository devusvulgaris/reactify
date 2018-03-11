import React, {Component} from 'react'
import App from './App'
//import {Router as Router} from 'react-router-dom'
import {ConnectedRouter as Router} from 'react-router-redux'
import {Provider} from 'react-redux'
import history from './history'

class Root extends Component {
  render() {
    const {store} = this.props
    return(
        <Provider store = {store}>
          <Router history = {history}>
            <App />
          </Router>
        </Provider>
    )
  }
}

export default Root