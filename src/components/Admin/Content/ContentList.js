import React, {PropTypes} from 'react'
import {Link} from 'react-router-dom'
import DeleteContent from './DeleteButton'
import {connect} from 'react-redux'
import {deleteContent} from '../../../AC'
import Dialog from '../../Alerts/Dialog'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faEye, faEdit, faTrashAlt } from '@fortawesome/fontawesome-free-solid'

const ContentList = ({pages, isOpen, id, toggleDialog, deleteContent, selectDeleteId, deleteId }) => {

  const handleDelete = (id) =>  {
    deleteContent(id)
    toggleDialog()
  }

  return (
      <div>
      <table className="content-list">
        <thead>
        <tr><th>Id</th><th>Title</th></tr>
        </thead>
        <tbody>
        {pages.map(page =>
            <tr key={page.nid[0].value}>
              <td>{page.nid[0].value}</td>
              <td> {page.title[0].value} </td>
              <td><Link to = {`/dashboard/content/${page.nid[0].value}/view`}><FontAwesomeIcon icon={faEye}/>View</Link></td>
              <td><Link to = {`/dashboard/content/${page.nid[0].value}/edit`}><FontAwesomeIcon icon={faEdit}/>Edit</Link></td>
              <td>
                <DeleteContent
                  id={page.nid[0].value}
                  toggleDialog={toggleDialog}
                  selectDeleteId={selectDeleteId}
                ><FontAwesomeIcon icon={faTrashAlt}/></DeleteContent>
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


ContentList.propTypes = {
pages: PropTypes.array.isRequired
}

export default connect(
    null,
    {deleteContent}
)(ContentList)