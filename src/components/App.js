import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import PrivateRoute from './Routes/PrivateRoute'

import PublicArea from './Routes/Public'

import ProtectedArea from "./Routes/Protected";

class App extends Component {
  render() {
    return(
    <div>
      <Switch>

        <PrivateRoute isAuthenticated = {this.props.auth.isAuthenticated}  path = "/dashboard" component = {ProtectedArea} />
        <Route path="/" component={PublicArea} />
      </Switch>
    </div>
    )
  }
}

export default withRouter(connect(state => ({
  auth: state.auth
    })

)(App))