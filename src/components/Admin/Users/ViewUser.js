import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import DeleteUser from './DeleteButton'
import Dialog from '../../Alerts/Dialog'
import {deleteUser} from "../../../AC";
import {connect} from 'react-redux'

class ViewUser extends Component {
  state= {
    isOpen: false
  }

  handleDelete = (id) =>  {
    this.props.deleteUser(id)
    this.toggleDialog()
  }

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const {id, user} = this.props
    console.log(user)
    return (
        <div>
          <div>
            <h2>{user[0].name[0].value}</h2>
            <div>{user[0].mail[0].value}</div>

          </div>
          <div className="action-btns">
            <button><Link to={`/dashboard/users/${id}/edit`}>Edit</Link></button>
            <DeleteUser
                id={id}
                toggleDialog={this.toggleDialog}
            />
          </div>

          <Dialog id={id}
                  show={this.state.isOpen}
                  onConfirm={this.handleDelete}
                  onClose={this.toggleDialog}>
            Are you sure you want to delete the user?
          </Dialog>
        </div>
    )
  }
}

export default connect((state, props) => ({
  deleteContent: props.deleteContent,
  users: state.users,
  id: props.match.params.id,
  user: state.users.items.filter(item => {
    if (item.uid[0].value == props.match.params.id) {
      return item
    }
  })
}), {deleteUser})(ViewUser)