import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Avatar from '../../Avatar'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faReact, faDrupal } from '@fortawesome/fontawesome-free-brands'
import { faCogs, faBell, faBellSlash } from '@fortawesome/fontawesome-free-solid'
import './style.scss'

class AdminProfileMenu extends Component {


  render() {
    const {user, notificationBar, toggleNotifications} = this.props
    return(
        <nav className="auth-profile-nav">
          <span onClick={()=>toggleNotifications()}><FontAwesomeIcon icon={notificationBar ? faBellSlash : faBell}/>Notifications</span>
          <Link to={"/dashboard/profile"} className="auth--profile-icon">
            <Avatar src={user.user !== undefined && user.user.user_picture !== undefined ? user.user.user_picture[0].url : null } />
          </Link>
          <NavLink to="/dashboard/settings" className="auth--settings-link"><FontAwesomeIcon icon={faCogs}/><span className="tooltip">Settings</span></NavLink>
        </nav>
    )
  }
}

export default AdminProfileMenu