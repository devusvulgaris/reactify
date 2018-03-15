import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import DeleteClient from '../DeleteButton'
import Dialog from '../../Alerts/Dialog'
import {deleteClient} from "../../../AC/adminActions";
import {connect} from 'react-redux'

class ViewClient extends Component {
  state= {
    isOpen: false
  }

  handleDelete = (id) =>  {
    this.props.deleteClient(id)
    this.toggleDialog()
  }

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const {id, client} = this.props
    console.log(client)

    if (client.length === 0) return null
    return (
        <div>
          <div>
            <h2>{client[0].name[0].value}</h2>
            <div>{client[0].mail[0].value}</div>
            <div>{client[0].number[0].value}</div>
            <div>{client[0].client_type[0] !== undefined ? client[0].client_type[0].value : null}</div>

          </div>
          <div className="action-btns">
            <button><Link to={`/dashboard/clients/${id}/edit`}>Edit</Link></button>
            <DeleteClient
                id={id}
                toggleDialog={this.toggleDialog}
            />
          </div>

          <Dialog id={id}
                  show={this.state.isOpen}
                  onConfirm={this.handleDelete}
                  onClose={this.toggleDialog}>
            Are you sure you want to delete the client?
          </Dialog>
        </div>
    )
  }
}

export default connect((state, props) => ({
  deleteContent: props.deleteContent,
  clients: state.clients,
  id: props.match.params.id,
  client: state.clients.items.filter(item => {
    if (item.id[0].value === +props.match.params.id) {
      return item
    }
  })
}), {deleteClient})(ViewClient)