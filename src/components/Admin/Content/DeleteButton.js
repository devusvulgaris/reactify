import React from 'react'

const DeleteContent = props => {

  const handleClick = () =>{
    if (props.selectDeleteId) {
      props.selectDeleteId(props.id)
    }

    props.toggleDialog()
  }

  return(
      <div>

      <button onClick={handleClick}>{props.children}Delete</button>
      </div>
  )

}

export default DeleteContent