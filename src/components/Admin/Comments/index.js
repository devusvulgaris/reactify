import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import { addToast } from "../../../AC";
import { loadAllComments, loadClients, addComment } from "../../../AC/adminActions";

import Alert from '../../Alerts/Alert'

import CommentList from './CommentList'
//import AddClient from "../Clients/AddClient";
//import EditClient from "./EditClient";
//import ViewClient from "./ViewClient";

class CommentPage extends Component {
  state = {
    isOpen: false,
    deleteId: null
  }

  toggleDialog = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  selectDeleteId = id => {
    this.setState({
      deleteId: id
    })
  }

  componentDidMount() {
    // if (!this.props.users.loaded) {
    this.props.loadAllComments()
    // }

    console.warn(this.props.comments)
  }

  getComments() {
    const {comments} = this.props
    // const savingIndicator = clients.saving  ? <h3>Saving ...</h3> : null
    if (comments.loading) return <h3>Loading comments...</h3>

    // console.warn(this.props.users.message)
    return(
        <div className="admin-content-section">

          <div className="content-wrapper">
            <div className="content-list-section">

              <Link to='/dashboard/comments/add'>Add new comment</Link>
              <CommentList
                  comments={this.props.comments.items}
                  isOpen={this.state.isOpen}
                  toggleDialog={this.toggleDialog}
                  selectDeleteId={this.selectDeleteId}
                  deleteId={this.state.deleteId}
              />
            </div>
            <div className="content-actions-section">

            </div>
          </div>
        </div>
    )
  }

  render() {
    return(
        <div>
          {this.getComments()}
        </div>
    )
  }
}

export default connect(state => ({
  comments: state.allComments,
  //menu: state.menu
}), {loadAllComments, addToast, addComment}, null, {pure: false})(CommentPage)