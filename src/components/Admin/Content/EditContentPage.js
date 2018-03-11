import React, {Component} from 'react'
import {connect} from 'react-redux'
import {updateContent} from "../../../AC"

import Alert from '../../Alerts/Alert'

import './style.scss'

class EditContentPage extends Component {


  componentDidUpdate() {
    console.warn(this.state)
  }

  componentWillReceiveProps(nextProps) {
  //  if (this.props.content.node[0].title[0].value != nextProps.content.node[0].title[0].value) {

  //  }
  }

  componentDidMount() {
   // this.setState({title: 'pzd too'})
    console.error(this.props.node[0])
  }

  state = {
    type: this.props.node[0].type[0].target_id,
    title: {value:this.props.node[0].title[0].value},
    body: {value:this.props.node[0].body[0].value}
  }


  render() {
    const message = this.props.content.message.text ? <Alert type={this.props.content.message.type} text={this.props.content.message.text}/> : null
    return(
        <div>
          {message}
          <h2>Edit content</h2>
          <form className="edit-content--form" onSubmit={this.handleSubmit}>
            <label htmlFor="">Title
              <input name="title" type="text" value={this.state.title.value} onChange={this.handleChange} />
            </label>
            <label htmlFor="">Body
              <textarea name="body" type="textarea" value={this.state.body.value} onChange={this.handleChange} />
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
    this.props.updateContent(this.state, this.props.node[0].nid[0].value)
    console.log(this.state)
  }

}

export default connect((state, props) => ({
      id: props.match.params.id,
      content: state.content,
      node: state.content.items.filter(item => {
        if (item.nid[0].value == props.match.params.id) {
          return item
        }
      })
    }), {updateContent}
)(EditContentPage)