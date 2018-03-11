import React from 'react'
//import defaultAvatar from '/src/assets/images/defaultAvatar.jpeg'
import './style.scss'

const Avatar = props => {
  const src = props.src ? props.src : '/src/assets/images/defaultAvatar.jpeg' // defaultAvatar //

  return(
      <img className="avatar" src={src} />
  )
}

export default Avatar