import React, {Component} from 'react'
import {connect} from 'react-redux'
import Alert from '../../Alerts/Alert'

import {addUser} from "../../../AC";

class AddUser extends Component {


  state = {

    _links: {
      type: {
        href: `http://reactify.dd:8083/rest/type/user/user`
      }
    },
    name: {value: ''},
    mail: {value: ''},
    pass: {value: ''},

    roles: [],
    status: {value: '1'}
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.addUser(this.state)
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: {value : ev.target.value}
    })
  }

  handleCheckboxChange = (ev, item) => {
    if (ev.target.checked) {
      this.setState({
        roles: [...this.state.roles, {target_id : ev.target.value}]
      })
    } else {
        this.setState({
         roles: this.state.roles.filter((val, i) => i !== item )
        })
      }
     // console.error(item)
      console.warn(this.state)

    }



  render() {
    const {users} = this.props
    //const message = this.props.users.message.text ? <Alert type={this.props.users.message.type} text={this.props.users.message.text}/> : null

    return(
        <div className="add-user-section">

          <h3>Add new user</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="">Name
              <input name="name" onChange={this.handleChange} value={this.state.name.value}>
              </input>
            </label>
            <label htmlFor="">E-mail
              <input name="mail" onChange={this.handleChange} value={this.state.mail.value} />
            </label>
            <label htmlFor="">Password
              <input name="pass" onChange={this.handleChange} value={this.state.pass.value}/>
            </label>
            <label htmlFor="auth">Authenticated user
              <input id="auth" name="roles[]" type="checkbox" onChange={ev => {this.handleCheckboxChange(ev, 0)}} value="authenticated" />
            </label>
            <label htmlFor="admin">Administrator
              <input id="admin" name="roles[]" type="checkbox" onChange={ev => {this.handleCheckboxChange(ev, 1)}} value="administrator" />

            </label>

            <button>{users.saving ? 'Adding..' : 'Add user'}</button>
          </form>
        </div>
    )
  }
}

export default connect(state => ({
      users: state.users
    }), {addUser}
)(AddUser)