import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateUser} from "../../../AC"

import Alert from '../../Alerts/Alert'

import './style.scss'

class EditUser extends Component {


  componentDidUpdate() {
    console.warn(this.state)
  }

  componentWillReceiveProps(nextProps) {
    //  if (this.props.content.node[0].title[0].value != nextProps.content.node[0].title[0].value) {

    //  }
  }

  componentDidMount() {
    // this.setState({title: 'pzd too'})
    console.error(this.props.user[0])
  }

  state = {
    //type: this.props.user[0].type[0].target_id,
    name: {value:this.props.user[0].name[0].value},
    mail: {value:this.props.user[0].mail[0].value}
  }


  render() {
   // const message = this.props.users.message.text ? <Alert type={this.props.users.message.type} text={this.props.users.message.text}/> : null
    return(
        <div>
          <h2>Edit User</h2>
          <form className="edit-content--form" onSubmit={this.handleSubmit}>
            <label htmlFor="">Title
              <input name="title" type="text" value={this.state.name.value} onChange={this.handleChange} />
            </label>
            <label htmlFor="">Body
              <input name="body" type="textarea" value={this.state.mail.value} onChange={this.handleChange} />
            </label>

            <button>Update</button>

          </form>
        </div>
    )
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: {value : ev.target.value}
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.updateUser(this.state, this.props.user[0].uid[0].value)
    console.log(this.state)
  }

}

export default connect((state, props) => ({
      id: props.match.params.id,
      users: state.users,
      user: state.users.items.filter(user => {
        if (user.uid[0].value == props.match.params.id) {
          return user
        }
      })
    }), {updateUser}
)(EditUser)