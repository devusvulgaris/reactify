import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import Logo from './Logo'
import ProfileLinks from '../Admin/ProfileLinks'
import Menu from '../Menu'
import './header.scss'

class Header extends Component {

  render() {
    const { auth, settings, menu, dispatch } = this.props
    const renderMenu = menu.items.map((item) => {
      let reference = '/' + item.title.toLowerCase()
      if (reference.includes('home')) {
        reference = '/'
      }
      return <Menu to = {reference} linkText = {item.title} key = {item.id + item.url} />
    })
    return(
        <div className="header">
          <div className="container">
            <div className="branding">
            <Logo settings={settings} />
            <Link className="site-name" to="/">{settings.site_name}</Link>
            </div>
            <nav className="menu-main">{renderMenu}</nav>

            <ProfileLinks isAuthenticated = {auth.isAuthenticated} dispatch={dispatch} />
          </div>
        </div>
    )
  }
}

export default Header