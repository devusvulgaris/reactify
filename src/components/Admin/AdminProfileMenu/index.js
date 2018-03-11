import React, { Component } from 'react'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faReact, faDrupal } from '@fortawesome/fontawesome-free-brands'
import { faCog, faBell } from '@fortawesome/fontawesome-free-solid'

class AdminProfileMenu extends Component {
  render() {
    return(
<nav className="auth-profile-nav">
<span><FontAwesomeIcon icon={faBell}/>Notifications</span>
<span><FontAwesomeIcon icon={faCog}/>Settings</span>
</nav>
    )
  }
}

export default AdminProfileMenu