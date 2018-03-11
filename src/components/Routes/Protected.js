import React, { Component } from 'react'
import Dashboard from '../Admin/Dashboard'

class Protected extends Component {
  render() {
    return(
    <div>
      <Dashboard />
    </div>
    )
  }
}

export default Protected