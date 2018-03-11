import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, Link} from 'react-router-dom'
import {loadContent} from "../../../AC";

import Alert from '../../Alerts/Alert'

import ContentList from './ContentList'
import AddContentPage from "../AddContentPage";
import EditContentPage from "./EditContentPage";
import ViewContent from "./ViewContentPage";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/fontawesome-free-solid'

class Content extends Component {
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
    if (!this.props.content.loaded) {
      this.props.loadContent()
    }

    console.warn(this.props.content.message)
    console.warn(this.props.menu)
  }


  getContent() {
    const {content} = this.props
    const message = this.props.content.message.text ? <Alert type={this.props.content.message.type} text={this.props.content.message.text}/> : null

    if (content.loading) return <h3>Loading...</h3>

    return(
        <div className="admin-content-section">
          {message}
        <div className="content-wrapper">
          <div className="content-list-section">

            <Link to='/dashboard/content/add'><FontAwesomeIcon icon={faPencilAlt} />Add page</Link>
            <ContentList
                pages={this.props.content.items}
                isOpen={this.state.isOpen}
                toggleDialog={this.toggleDialog}
                selectDeleteId={this.selectDeleteId}
                deleteId={this.state.deleteId}
            />
          </div>
          <div className="content-actions-section">
            <Route path="/dashboard/content/add" component={AddContentPage} />
            <Route path="/dashboard/content/:id/view" component={ViewContent} />
            <Route path="/dashboard/content/:id/edit" component={EditContentPage} />
          </div>
        </div>

          <div className="toast-container">
          </div>

        </div>
    )

  }
  render() {
    return(
        <div>
          {this.getContent()}
        </div>
    )
  }
}

export default connect(state => ({
  content: state.content,
  menu: state.menu
}), {loadContent}, null,  { pure: false })(Content)