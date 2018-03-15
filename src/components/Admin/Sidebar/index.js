import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  Logo from '../../Header/Logo'


import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faTachometerAlt, faChartPie, faUsers, faFileAlt, faComments, faChessQueen } from '@fortawesome/fontawesome-free-solid'
import './style.scss'

const Sidebar = ({minified, settings, sidebarBg}) => {

  return (
      <div className={`auth--sidebar${minified ? ' minified' : ''}${sidebarBg === 'dark' ? ' dark-bg' : ''}`}>
        <nav className={`sidebar-navigation`}>
          <Link to="/" className="auth--branding">
            <Logo settings={settings} />
            {minified ? null : settings.site_name}
          </Link>
          <Link to="/dashboard"><span><FontAwesomeIcon
              icon={faChartPie}/></span>{minified ? null : 'Dashboard'}</Link>
          <Link to="/dashboard/content"><span><FontAwesomeIcon
              icon={faFileAlt}/></span>{minified ? null : 'Content'}</Link>
          <Link to="/dashboard/users"><span>
              <FontAwesomeIcon icon={faUsers}/></span>{minified ? null : 'Users'}</Link>
          <Link to="/dashboard/comments"><span>
              <FontAwesomeIcon icon={faComments}/></span>{minified ? null : 'Comments'}</Link>
          <Link to="/dashboard/clients"><span><FontAwesomeIcon
              icon={faChessQueen}/></span>{minified ? null : 'Clients'}</Link>
        </nav>
      </div>
  )
}

export default Sidebar