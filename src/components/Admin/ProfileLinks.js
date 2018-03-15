import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import Logout from "./Logout"


import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUser, faTachometerAlt, faBell } from '@fortawesome/fontawesome-free-solid'

import {logoutUser, toggleNotificationBar} from "../../AC/index";


class ProfileLinks extends Component {

  handleNotificationBar = () => {
    const { dispatch } = this.props
    dispatch(toggleNotificationBar())
    console.log('diss')
  }

  render() {
    const { isAuthenticated, dispatch } = this.props
    return(
        <nav className="user-navigation">
          {!isAuthenticated &&
          <div>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to = '/register'>Register</NavLink>
          </div>
          }

          { isAuthenticated &&
          <div>
            <FontAwesomeIcon style={{'cursor': 'pointer'}} icon={faBell} onClick={() => this.handleNotificationBar()} />
            <NavLink to = '/dashboard'><FontAwesomeIcon icon={faTachometerAlt} />Dashboard</NavLink>
            <Logout logoutClick = {() => dispatch(logoutUser())} />
          </div>
          }

        </nav>
    )
  }
}

export default ProfileLinks