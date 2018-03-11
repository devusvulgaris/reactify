import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Menu extends Component {

  render() {
    const { to, linkText } = this.props
    return(
        <div>
          <NavLink to = {to}>{linkText}</NavLink>
        </div>
    )
  }
}

export default Menu