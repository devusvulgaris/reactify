import React, { Component } from 'react'
import { connect } from 'react-redux'
import {loadArticleComments} from '../../AC'

import './commentList.scss'

class CommentList extends Component {

  componentDidMount() {
    this.props.loadArticleComments(this.props.articleId)
  }

  convertTimestamp(timestamp) {
    let date = new Date(timestamp * 1000)
    let convertedDate = `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}
     at ${date.getHours()}:${date.getMinutes()} `
    return convertedDate
  }

  render() {
    const { comments } = this.props
    let renderedComments = comments.items.map(item => (
        <div className = "comment" key = {item.cid[0].value}>
        <p>{item.name[0].value}</p><p>{item.subject[0].value}</p>
        <p>{item.comment_body[0].value}</p>
        <p>{this.convertTimestamp(item.created[0].value)}</p>
        </div>
    ))
    return(
    <div className="comments--wrapper">
      {renderedComments}
    </div>
    )
  }
}

export default connect(state => ({
  comments: state.comments
}),
    {loadArticleComments}
)(CommentList)