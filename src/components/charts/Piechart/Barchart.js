import React from 'react'
export default function Barchart(props) {
  return(
      <svg viewBox="0 0 200 50">
        <g>
        <text x="0" y="0">4 users</text>
        <rect fill="red" width="3" height="30" fontSize="16"></rect>
        </g>
      </svg>
  )
}