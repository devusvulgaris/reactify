import React, { Component } from 'react'

class Logout extends Component {
  render() {
    const {logoutClick} = this.props
    return(
    <button onClick = {() => logoutClick()}>
      Logout
    </button>
    )
  }
}

export default Logout