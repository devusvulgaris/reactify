import React, {Component} from 'react'
import {connect} from 'react-redux'
import {loadAllComments} from "../../../AC";

class Comments extends Component {
  componentDidMount() {
    this.props.loadAllComments()
  }
  render() {
    return(
        <div>Comments</div>
    )
  }
}

export default connect(state => ({
      comments: state.comments
    }),
    {loadAllComments}

)(Comments)