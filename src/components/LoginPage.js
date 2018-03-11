import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'

import {userLogin} from '../AC'

class LoginPage extends Component {

  state = {
    name: '',
    pass: '',
   // redirectToReferrer: this.props.isAuthenticated
  }
  render() {
    const { from } = this.props.location.state|| { from: { pathname: '/'}}
    const  redirectToReferrer  = this.props.isAuthenticated

    if (redirectToReferrer) {
      return (
          <Redirect to={from} />
      )
    }

    return(
    <div>
      <h3>Login form</h3>

      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" value = {this.state.name} onChange={this.handleChange} />
        <input type="password" name="pass" value = {this.state.pass} onChange={this.handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
    )
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.userLogin(this.state)
    console.dir(this.state)
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
   // console.log(JSON.stringify(this.state))
  }
}

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}), {userLogin}
)(LoginPage)