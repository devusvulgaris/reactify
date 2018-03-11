import React, {Component} from 'react'
import {connect} from 'react-redux'

import Notification from './Notification'

import './style.scss'

class NotificationContainer extends Component {

  render() {
    const {notifications} = this.props
    const notificationsList = notifications.items.map(notification =>
    <Notification text={notification.text} type={notification.type}/>)
return (
    <div className="notifications--container">
      <div><h4>
       Activity
      </h4></div>
      {notificationsList}
    </div>
)
  }
}

export default connect( (state, props) => ({
  notifications: state.notifications,
  children: props.children
})

)(NotificationContainer)