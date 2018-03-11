import React, { Component } from 'react'
import {connect} from 'react-redux'
import {submitContactForm} from '../../AC'
import {Link} from 'react-router-dom'
import './contactPage.scss'

class ContactPage extends Component {

  state = {
    name: null,
    mail: null,
    subject: null,
    message: null,
    field_city: null,
  }
  render() {
    return(
        <div className="container">
          <Link to="/profile">Profil</Link>
          <div className="form-wrapper">
            <h2>Contact page</h2>

            <form className="contact-form" onSubmit={this.handleSubmit} >
              <input name="name" placeholder="Name" onChange={this.handleChange} />
              <input name="mail" placeholder="Email" onChange={this.handleChange} />
              <input name="subject" placeholder="Subject" onChange={this.handleChange} />
              <textarea name="message" placeholder="Message" onChange={this.handleChange} />
              <input name="field_city" placeholder="City" onChange={this.handleChange} />
              <button>Send</button>
            </form>
          </div>
        </div>
    )
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.submitContactForm(this.state)
    console.dir(this.state)
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

}

export default connect(null, {submitContactForm})(ContactPage)

