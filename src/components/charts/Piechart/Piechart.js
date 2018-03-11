import React, { Component } from 'react'

class Piechart extends Component {

  render() {
    return ( <div>
        <svg style={{
          width: '100px',
          borderRadius: '50%'
        }} viewBox="0 0 64 64">
          <text>Total users</text>
<circle r="25%" cx="50%" cy="50%"  className="pie" fill="none" stroke="gold" strokeWidth="32" style={{strokeDasharray: '30 100'}} />
<circle r="25%" cx="50%" cy="50%"  className="pie" fill="none" stroke="yellowgreen" strokeWidth="32" style={{strokeDasharray: '20 100', strokeDashoffset: -30}} />
<circle r="25%" cx="50%" cy="50%"  className="pie" fill="none" stroke="pink" strokeWidth="32" style={{strokeDasharray: '50 100', strokeDashoffset: -50}} />

    </svg>


        </div>
    )
  }
}

export default Piechart

