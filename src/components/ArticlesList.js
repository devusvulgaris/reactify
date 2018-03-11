import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, Route} from 'react-router-dom'
import {loadArticles} from '../AC'

import Article from './Article/Article'


class ArticlesList extends Component {

  componentDidMount() {
    this.props.loadArticles()
  }

  render() {
    const {articles} = this.props
    let renderedArticles = articles.items.map(article => (
        <div className="articles--item" key={article.nid[0].value}>
          <h4><Link to={`/articles/${article.nid[0].value}`}>{article.title[0].value}</Link></h4>
          {/* <p>{article.body[0].summary}</p> */}
        </div>
    ))

    return(
        <section>
          {renderedArticles}
          <Route path = "/articles/:id" children = {this.getArticle} />
        </section>
    )
  }

}

export default connect(state => ({
      articles: state.articles
    }),
    {loadArticles}
)(ArticlesList)