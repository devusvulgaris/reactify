import React, { Component } from 'react'

class Settings extends Component {


  render() {
    return(
    <div>
      <h3>Settings page</h3>
      <label htmlFor="">
        <input type="checkbox" name="sidebarBg" value="dark" onChange={ev => {this.props.setSidebarBg(ev)}}/>
      </label>
    </div>
    )
  }
}

export default Settings