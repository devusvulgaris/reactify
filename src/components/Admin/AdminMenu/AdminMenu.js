import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faReact, faDrupal } from '@fortawesome/fontawesome-free-brands'
import { faBars } from '@fortawesome/fontawesome-free-solid'

import './style.scss'

export default function AdminMenu(props) {
  return(
      <nav className="auth-main-nav">
        <span className="icon"><FontAwesomeIcon icon={faBars} onClick={() => {props.toggleSidebar()}}/></span>
        <Link to="/"><FontAwesomeIcon icon={faReact}/>Back to app</Link>
        <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
        <NavLink activeClassName="active" to="/dashboard/content">Content</NavLink>
        <NavLink activeClassName="active" to="/dashboard/users">Users</NavLink>
        <Link to="/dashboard/comments">Comments</Link>
        <Link to="/dashboard/clients">Clients</Link>
      </nav>
  )
}
