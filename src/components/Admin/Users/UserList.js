import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import DeleteUser from './DeleteButton'
import {connect} from 'react-redux'
import {deleteUser} from '../../../AC'
import Dialog from '../../Alerts/Dialog'
import Avatar from '../../Avatar'

const UserList = ({users, isOpen, id, toggleDialog, deleteUser, selectDeleteId, deleteId }) => {

  const handleDelete = (id) =>  {
    deleteUser(id)
    toggleDialog()
  }

  return (
      <div>
        <table className="content-list">
          <thead>
          <tr><th>Id</th><th>Title</th></tr>
          </thead>
          <tbody>
          {users.map(user =>
              <tr key={user.uid[0].value}>
                <td>{user.uid[0].value}</td>
                <td><Avatar src={user.user_picture !== undefined && user.user_picture[0] !== undefined ? user.user_picture[0].url : null} /></td>
                <td>{user.field_city !== undefined && user.field_city[0] !== undefined ? user.field_city[0].value : 'city is not specified'}</td>
                <td> {user.name[0].value} </td>
                <td><Link to = {`/dashboard/users/${user.uid[0].value}/view`}>View</Link></td>
                <td><Link to = {`/dashboard/users/${user.uid[0].value}/edit`}>Edit</Link></td>
                <td>
                  {  <DeleteUser
                      id={user.uid[0].value}
                      toggleDialog={toggleDialog}
                      selectDeleteId={selectDeleteId}
                  /> }
                </td>
                {/* <td><Link to = {`/dashboard/content/${page.nid[0].value}/delete`}>Delete</Link></td> */}
              </tr>
          )}
          </tbody>
        </table>
        <Dialog id={deleteId}
                show={isOpen}
                onConfirm={handleDelete}
                onClose={toggleDialog}>
          Are you sure you want to delete content?
        </Dialog>
      </div>
  )
}


UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default connect(
    null,
    {deleteUser}
)(UserList)