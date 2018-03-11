import React from 'react'

const DeleteUser = props => {

  const handleClick = () =>{
    if (props.selectDeleteId) {
      props.selectDeleteId(props.id)
    }

    props.toggleDialog()
  }

  return(
      <div>
      <button onClick={handleClick}>Delete</button>
      </div>
  )

}

export default DeleteUser