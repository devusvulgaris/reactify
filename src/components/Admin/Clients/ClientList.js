import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import DeleteClient from '../DeleteButton'
import {connect} from 'react-redux'
import {deleteClient} from '../../../AC/adminActions'
import Dialog from '../../Alerts/Dialog'
//import Avatar from '../../Avatar'

const ClientList = ({clients, isOpen, id, toggleDialog, deleteClient, selectDeleteId, deleteId }) => {

  const handleDelete = (id) =>  {
    deleteClient(id)
    toggleDialog()
  }

  if (clients.length === 0) return <p>No clients yet.</p>

  return (
      <div>
        <table className="content-list">
          <thead>
          <tr><th>Id</th><th>Name</th></tr>
          </thead>
          <tbody>
          {clients.map(client =>
              <tr key={client.id[0].value}>
                <td>{client.id[0].value}</td>
                 <td>{client.name !== undefined && client.name[0] !== undefined ? client.name[0].value : 'no name'}</td>
                 <td>{client.mail !== undefined && client.mail[0] !== undefined ?client.mail[0].value : 'no email'}</td>
                 <td>{client.client_type !== undefined && client.client_type[0] !== undefined ?client.client_type[0].value : 'no type'}</td>
                <td><Link to = {`/dashboard/clients/${client.id[0].value}`}>View</Link></td>
                <td><Link to = {`/dashboard/clients/${client.id[0].value}/edit`}>Edit</Link></td>
                <td>
                  {  <DeleteClient
                      id={client.id[0].value}
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
          Are you sure you want to delete this client?
        </Dialog>
      </div>
  )
}


ClientList.propTypes = {
  clients: PropTypes.array.isRequired
}

export default connect(
    null,
    {deleteClient}
)(ClientList)