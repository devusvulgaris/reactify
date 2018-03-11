import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import DeleteContent from './DeleteButton'
import Dialog from '../../Alerts/Dialog'
import {deleteContent} from "../../../AC";
import {connect} from 'react-redux'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/fontawesome-free-solid'

class ViewContentPage extends Component {
  state= {
    isOpen: false
  }

  handleDelete = (id) =>  {
    this.props.deleteContent(id)
    this.toggleDialog()
  }

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const {id, node} = this.props
    console.log(node)
    return (
        <div>
          <div>
            <h2>{node[0].title[0].value}</h2>
            <div>{node[0].body[0].value}</div>
          </div>
          <div className="action-btns">
            <button><Link to={`/dashboard/content/${id}/edit`}><FontAwesomeIcon icon={faEdit} />Edit</Link></button>
            <DeleteContent
                id={id}
                toggleDialog={this.toggleDialog}
            />
          </div>

          <Dialog id={id}
                  show={this.state.isOpen}
                  onConfirm={this.handleDelete}
                  onClose={this.toggleDialog}>
            Are you sure you want to delete content?
          </Dialog>
        </div>
    )
  }
}

export default connect((state, props) => ({
  deleteContent: props.deleteContent,
  content: state.content,
  id: props.match.params.id,
  node: state.content.items.filter(item => {
    if (item.nid[0].value == props.match.params.id) {
      return item
    }
  })
}), {deleteContent})(ViewContentPage)