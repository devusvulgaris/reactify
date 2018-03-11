import React, {Component} from 'react'
import {connect} from 'react-redux'

import './style.scss'

class Notification extends Component {

  render() {
   const  {text, type} = this.props
    return (
        <div className={`notification ${type}`}>
          {text}
          <span className="close">x</span>
        </div>
    )
  }
}

export default connect( (state, props) => ({
       id: props.id,
           type: props.type,
      text: props.text
    })


)(Notification)