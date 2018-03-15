import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import DeleteComment from '../DeleteButton'
import {connect} from 'react-redux'
import {deleteComment} from '../../../AC/adminActions'
import Dialog from '../../Alerts/Dialog'
//import Avatar from '../../Avatar'

const CommentList = ({comments, isOpen, id, toggleDialog, deleteContent, selectDeleteId, deleteId }) => {

  const handleDelete = (id) =>  {
    deleteComment(id)
    toggleDialog()
  }

  if (comments.length === 0) return <p>No comments yet.</p>

  return (
      <div>
        <table className="content-list">
          <thead>
          <tr><th>Id</th><th>Subject</th></tr>
          </thead>
          <tbody>
          {comments.map(comment =>
              <tr key={comment.cid[0].value}>
                <td>{comment.cid[0].value}</td>
                 <td>{comment.subject !== undefined && comment.subject[0] !== undefined ? comment.subject[0].value : 'no subject'}</td>
                 <td>{comment.comment_body !== undefined && comment.comment_body[0] !== undefined ? comment.comment_body.value : 'no comment body'}</td>

                  <td><Link to = {`/dashboard/comments/${comment.cid[0].value}`}>View</Link></td>
                <td><Link to = {`/dashboard/comments/${comment.cid[0].value}/edit`}>Edit</Link></td>
                <td>
                  {  <DeleteComment
                      id={comment.cid[0].value}
                      toggleDialog={toggleDialog}
                      selectDeleteId={selectDeleteId}
                  /> }
                </td>
              </tr>
          )}
          </tbody>
        </table>
        <Dialog id={deleteId}
                show={isOpen}
                onConfirm={handleDelete}
                onClose={toggleDialog}>
          Are you sure you want to delete this comment?
        </Dialog>
      </div>
  )
}


CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default connect(
    null,
    {deleteComment}
)(CommentList)