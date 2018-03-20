import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import Avatar from '../../../Avatar'

import {logoutUser} from "../../../../AC";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faUser, faCog, faSignOutAlt} from '@fortawesome/fontawesome-free-solid'

import './style.scss'

class ProfileCard extends Component {

  state = {
    profileCardOpen: false
  }

  componentDidMount() {
    document.body.addEventListener('click', this.handleClose, false)
  }

  componentWillUnmount() {
    document.body.removeEventListener('click', this.handleClose, false)
  }

  handleClose = ev => {
    //console.log(ev.target.tagName)
    //const profileInfo = document.body.querySelector('.auth--profile-info')
    if (!this.node.contains(ev.target))
      this.setState({
        profileCardOpen: false
      })

}

  toggleProfileCard = () => {
    this.setState({
      profileCardOpen: !this.state.profileCardOpen
    })
  }

  getProfileBody() {

    const {user, logoutUser} = this.props
    if (this.state.profileCardOpen) {
      //console.error(user.user.name[0])
      return (
          <div className="auth--profile-info">
            <div className="profile-card--intro">
              <img className="profile-card--image" src={user.user !== undefined && user.user.user_picture !== undefined && user.user.user_picture[0] ? user.user.user_picture[0].url: 'nja'} alt=""/>
              <div className="div">
              <span className="profile-card--name">{user && user.user !== undefined && user.user.name !== undefined && user.user.name[0] !== undefined? user.user.name[0].value : 'no name'}</span>
              <span className="profile-card--mail">{user && user.user !== undefined && user.user.mail !== undefined && user.user.mail[0] !== undefined? user.user.mail[0].value : 'no mail'}</span>
              </div>
              </div>
            <div className="profile-card--actions">
              <Link to="/dashboard/profile"><FontAwesomeIcon icon={faUser}/>Profile</Link>
              <Link to="/dashboard/profile/edit"><FontAwesomeIcon icon={faCog}/>Edit</Link>
              <span onClick={() => {logoutUser()}} className="profile-card--logout">
                <FontAwesomeIcon icon={faSignOutAlt}/>Logout</span>
            </div>
          </div>
      )
      return null
    }

  }

  render() {
    const {user} = this.props

    return(
        <div className="auth--profile-card" ref={node => this.node = node}>
         <span onClick={() => {this.toggleProfileCard()}}>
           <Avatar src={user.user !== undefined && user.user.user_picture !== undefined && user.user.user_picture[0] ? user.user.user_picture[0].url : null } />
         </span>
          {this.getProfileBody()}
        </div>
    )
  }
}

export default connect( (state) => ({
      user: state.currentUser
    }),
    {logoutUser})(ProfileCard)


