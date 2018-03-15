import React, { Component } from 'react'
import { Route, Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import './dashboard.scss'

import  Piechart from '../charts/Piechart/Piechart'
import  Barchart from '../charts/Piechart/Barchart'

import AdminMenu from '../AdminMenu/AdminMenu'
import AdminProfileMenu from '../AdminProfileMenu'

import Profile from '../Profile'
import Toasts from '../../UI/Toasts/Toasts'
import Content from '../Content'
import UsersPage from '../Users'
import Comments from '../Comments'
import Clients from '../Clients'
import Settings from '../Settings'
import Sidebar from '../Sidebar'
import NotificationContainer from '../Notifications/NotificationContainer'
import EditContentPage from '../Content/EditContentPage'
import ViewContent from '../Content/ViewContentPage'
import {toggleNotificationBar} from "../../../AC";

class Dashboard extends Component {
  state = {
    miniSidebar: false,
    sidebarBg: 'light'
  }
  toggleNotifications = () => {
    const { dispatch } = this.props
    dispatch(toggleNotificationBar())
    console.log('diss')
  }

  toggleSidebar = () => {
    this.setState({
      miniSidebar: !this.state.miniSidebar
    })
  }

  setSidebarBg = (ev) => {
    if (ev.target.checked) {
      this.setState({
        sidebarBg: ev.target.value
      })
    } else {
      this.setState({
        sidebarBg: 'light'
      })
    }
  }

  render() {
    const { settings, currentUser, miniSidebar } = this.props
    return (
        <div className="auth--layout-container">
          <Sidebar
              settings={settings}
              minified={this.state.miniSidebar}
              sidebarBg={this.state.sidebarBg}
          />
          <div className="auth--main-wrapper">
          <header className="auth--header">
            <AdminMenu toggleSidebar={this.toggleSidebar} />
            <AdminProfileMenu
                settings={settings}
                user={currentUser}
                notificationBar={settings.showNotificationBar}
                toggleNotifications={this.toggleNotifications} />
          </header>


            <main className="auth--main">
              <Route exact path="/dashboard" component={Piechart} />
              <Route path="/dashboard/content" component={Content}/>
              <Route path="/dashboard/users" component={UsersPage}/>
              <Route path="/dashboard/comments" component={Comments}/>
              <Route path="/dashboard/clients" component={Clients}/>
              <Route path="/dashboard/profile" component={Profile}/>
              <Route path="/dashboard/settings" render={() => <Settings setSidebarBg={this.setSidebarBg} />}/>
            </main>
          </div>
          {settings.showNotificationBar ? <NotificationContainer/> : null }
          <Toasts/>
        </div>
    )
  }
}

export default withRouter(connect(store  => ({
  settings: store.settings,
  currentUser: store.currentUser
}))(Dashboard))