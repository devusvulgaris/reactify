import React, { Component } from 'react'
import {connect} from 'react-redux'

import {addClient} from '../../../AC/adminActions'
import store from "../../../store";
class AddClient extends Component {

  state = {
     _links: {
       type: {
         href: `http://reactify.dd:8083/rest/type/client/client`
       }
     },
    name: {value: ''},
    number: {value: ''},
    mail: {value: ''},
    client_type: {value: 'lead'}

  }

  handleSubmit = ev => {
    ev.preventDefault()
    store.dispatch(addClient(this.state))
    console.warn(this.state)
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: {value : ev.target.value}
    })

    if (ev.target.name === 'type') {
      this.setState({
        _links: {
          type: {
            href: `http://reactify.dd:8083/rest/type/client/${ev.target.value}`
          }
        }
      })
    }
  }

  render() {
    return(
        <div className="className">
          <h3>Add new client</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Select type
              <select name="client_type" onChange={this.handleChange} value={this.state.client_type.value}>
                <option value="lead">Lead</option>
                <option value="new_client">New client</option>
              </select>
            </label>

            <label htmlFor="">Name
              <input name="name" onChange={this.handleChange} value={this.state.name.value} />
            </label>
            <label htmlFor="">Phone number
              <input name="number" onChange={this.handleChange} value={this.state.number.value} />
            </label>
            <label htmlFor="">Email
              <input name="mail" onChange={this.handleChange} value={this.state.mail.value} />
            </label>

            <button>Add client</button>
          </form>
        </div>
    )
  }
}

export default AddClient