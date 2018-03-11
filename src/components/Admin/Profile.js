import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchUser} from "../../AC/index"

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/fontawesome'

class Profile extends Component {
  componentDidMount() {
    if (!this.props.currentUser.userLoaded) {
      this.props.fetchUser()
    }
  }

  render() {
console.warn(this.props.currentUser)
    if (this.props.currentUser.userLoading) return <p>Loading user...</p>

    const { name, field_city, user_picture, created } = this.props.currentUser.user
    return(
        <div>
          <img src={user_picture[0].url} alt={user_picture[0].alt} />
         <p>Name: {name[0].value}</p>
          <p>City: {field_city[0].value}</p>
        </div>
    )
  }
}

export default connect(state => ({
      currentUser: state.currentUser
    }),
    {fetchUser}

)(Profile)