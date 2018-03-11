import React, { Component } from 'react'
import {connect} from 'react-redux'
import Toast from './Toast'

import './style.scss'

import {removeToast} from '../../../AC'

const Toasts = ({toasts, removeToast}) => {

    return(
        <div className="toasts-container">
          {toasts.map(toast => {
            const {id} = toast
            return (
                <Toast {...toast} onClose={() => {removeToast(id)}}/>
            )
          })}
        </div>
    )

}

export default connect(state => ({
  toasts: state.toasts
}), {removeToast})(Toasts)