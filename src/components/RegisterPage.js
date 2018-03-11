import React, { Component } from 'react'
import {connect} from 'react-redux'
import {registerUser, getToken} from '../AC'

class RegisterPage extends Component {

  state = {
    name: { value : ''},
    mail: { value : ''},
    pass: { value : ''}
  }

  render() {
    return(
        <div>
          <h3>Register form</h3>

          <form onSubmit = {this.handleSubmit}>
            <input type="text" name="name" value = {this.state.name.value} onChange = {this.handleChange} />
            <input name="mail" value = {this.state.mail.value} onChange = {this.handleChange} />
            <input type="password" name="pass" value = {this.state.pass.value} onChange = {this.handleChange} />
            <button type="submit">Register</button>
          </form>
        </div>
    )
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.registerUser(this.state)
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: {value : ev.target.value}
    })
    console.log(JSON.stringify(this.state))
  }
}

export default connect(null, {registerUser, getToken}

)(RegisterPage)