import React from 'react'
import './style.scss'

const Alert = props => {
  const {type} = props

  return(
      <div className = {`alert ${type}`}>
        {props.text}
      </div>
  )
}

export default Alert