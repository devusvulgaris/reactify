import React, { Component } from 'react'
import {connect} from 'react-redux'
import {loadArticles} from "../../AC"

import CommentList from '../CommentList/CommentList'

class Article extends Component {
  render() {
    return(
        <article>
          {this.getBody()}
        </article>
    )
    alert(this.props.article)
  }

  getBody = () => {
    const {article, id} = this.props

    //let article = articles.items.filter(item => item.nid[0].value == id)

    if (!this.props.match) {
      return <h3>There is no such article</h3>
    } else {
      return(
          <div>
            <h2>{article[0].title[0].value}</h2>
            <img src = {article[0].field_image[0].url} alt = {article[0].field_image[0].alt} />
            {article[0].body[0].value}
            <CommentList articleId = {id} />
          </div>
      )
    }

  }

  componentDidMount() {
    console.log(this.props.match)
  }
}

export default connect((state, props) => ({
      id: props.match.params.id,
      articles: state.articles,
      article: state.articles.items.filter(item => {
        if (item.nid[0].value == props.match.params.id) {
          return item
        }
      })
    }),
    {loadArticles}
)(Article)