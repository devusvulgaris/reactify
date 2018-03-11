import React from 'react'
import './style.scss'

const Toast = props => {
  const {type} = props

  return(
      <div className = {`toast ${type}`}>
        {props.text}
      </div>
  )
}

export default Toast