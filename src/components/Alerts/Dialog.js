import React from 'react'
import './style.scss'

const Dialog = props => {
  const {id, show, onConfirm} = props

  if (!show) {
    return null
  }
  const confirmButton = onConfirm ?  <button className="action-btn" onClick={() => {onConfirm(id)}} >Confirm</button> : null
  return(
      <div className = "dialog-overlay">
        <div className="dialog">
          {props.children}
          <div className="dialog-footer">
            {confirmButton}
            <button onClick={props.onClose}>Close</button>
          </div>
        </div>

      </div>
  )
}

export default Dialog