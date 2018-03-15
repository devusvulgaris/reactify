import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateClient} from "../../../AC/adminActions"

//import './style.scss'

class EditClient extends Component {

  componentDidUpdate() {
    console.warn(this.state)
  }

  componentDidMount() {
    // this.setState({title: 'pzd too'})
    console.error(this.props.client[0])
  }

  state = {
    name: {value:this.props.client[0].name[0].value},
    mail: {value:this.props.client[0].mail[0].value},
    number: {value:this.props.client[0].number[0].value},
    client_type: {value: this.props.client[0].client_type[0] !== undefined ? this.props.client[0].client_type[0].value : null}
  }


  render() {
    // const message = this.props.users.message.text ? <Alert type={this.props.users.message.type} text={this.props.users.message.text}/> : null
    return(
        <div>
          <h2>Edit Client</h2>
          <form className="edit-content--form" onSubmit={this.handleSubmit}>


            <label htmlFor="">Title
              <input name="name" type="text" value={this.state.name.value} onChange={this.handleChange} />
            </label>
            <label htmlFor="">Email
              <input name="mail" type="text" value={this.state.mail.value} onChange={this.handleChange} />
            </label>

            <label htmlFor="">Phone number
              <input name="number" value={this.state.number.value} onChange={this.handleChange}  />
            </label>
            <label htmlFor="">Client type
              <select name="client_type" onChange={this.handleChange} value={this.state.client_type.value}>
                <option value="lead">Lead</option>
                <option value="new_client">New client</option>
              </select>
            </label>

            <button>Update</button>

          </form>
        </div>
    )
  }

  handleChange = ev => {
    this.setState({
      [ev.target.name]: {value : ev.target.value}
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.props.updateClient(this.state, this.props.client[0].id[0].value)
    console.log(this.state)
  }
}

export default connect((state, props) => ({
      id: props.match.params.id,
      clients: state.clients,
      client: state.clients.items.filter(client => {
        if (client.id[0].value === +props.match.params.id) {
          return client
        }
      })
    }), {updateClient}
)(EditClient)