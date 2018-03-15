import React from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/fontawesome-free-solid'

const DeleteItem = props => {

  const handleClick = () =>{
    if (props.selectDeleteId) {
      props.selectDeleteId(props.id)
    }

    props.toggleDialog()
  }

  return(
      <div>
        <button onClick={handleClick}><FontAwesomeIcon icon={faTrash}/></button>
      </div>
  )

}

export default DeleteItem