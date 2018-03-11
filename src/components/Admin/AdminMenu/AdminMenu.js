import React from 'react'
import { Link } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faReact, faDrupal } from '@fortawesome/fontawesome-free-brands'

export default function AdminMenu(props) {
  return(
      <nav className="auth-main-nav">
        <Link to="/"><FontAwesomeIcon icon={faReact}/>Back to app</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/dashboard/content">Content</Link>
        <Link to="/dashboard/users">Users</Link>
        <Link to="/dashboard/comments">Comments</Link>
        <Link to="/dashboard/profile">Profile</Link>
      </nav>
  )
}
