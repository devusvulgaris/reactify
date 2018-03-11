import React, {Component} from 'react'
import Menu from './Menu'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import ProfileLinks from './ProfileLinks'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import Footer from './Footer/Footer'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import Profile from './Profile'
import Article from './Article/Article'
import ArticlesList from './ArticlesList'
import NotificationContainer from './Notifications/NotificationContainer'
import NotFound from './Routes/NotFound'

import Dashboard from './Dashboard'

import PrivateRoute from './Routes/PrivateRoute'

import {getThemeSettings, loadMenu, appSetup} from '../AC/index'
import ContactPage from "./ContactPage/ContactPage"


import Header from './Header/Header'

import './app.scss'



class AdminPages extends Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: []
    }
  }

  componentWillMount() {
    this.props.dispatch(appSetup())
  }

  componentDidMount() {
    /*setTimeout(() => {
      fetch('http://reactify.dd:8083/rest/menu/main?_format=json')
          .then(res => res.json())
          .then(data => {
            this.setState({'menu': data})
            console.warn(this.state.menu)
          })
          .catch(error => console.log(error.message))
    }, 1000)*/
    this.props.dispatch(loadMenu())

  }

  render() {
    let styles = {
      fullWidth: '100%',
      fixedWidth: '1600px',
    }

    const {menu, auth, settings, dispatch} = this.props
    const renderMenu = menu.items.map((item) => {
      const reference = '/' + item.title.toLowerCase()
      return <Menu to = {reference} key = {item.id} />
    })
    console.log('Is it authed: ' + auth.isAuthenticated)

    const wrapperWidth = settings.full_width ? styles.fullWidth : styles.fixedWidth
    let logoUrl = settings.url + settings.logo_url
    return(
        <div className="app-container" style={{wrapperWidth}}>
          <div className="app-wrapper">
            <Header auth={auth} settings={settings} menu={menu} dispatch={dispatch} />
            <main className="app-content">
              <div className="inner-content">

                <Switch>
                  <Route path = "/" exact component = {HomePage} />
                  /*<PrivateRoute exact isAuthenticated = {auth.isAuthenticated} path = "/articles" component = {ArticlesList} />*/
                  <PrivateRoute isAuthenticated = {auth.isAuthenticated}  path = "/dashboard" component = {Dashboard} />

                </Switch>

              </div>
            </main>
            <Footer />
          </div>
          {this.props.settings.showNotificationBar ? <NotificationContainer/> : null }
        </div>
    )
  }
}

export default withRouter(connect((state) => ({

      menu: state.menu,
      auth: state.auth,
      settings: state.settings,
    })

)(AdminPages))