import React from 'react'
import {Route, Link} from 'react-router-dom'
import './dashboard.scss'

import AdminMenu from '../AdminMenu/AdminMenu'
import AdminProfileMenu from '../AdminProfileMenu'

import Profile from '../Profile'
import Toasts from '../../UI/Toasts/Toasts'
import Content from '../Content'
import UsersPage from '../Users'
import Comments from '../Comments'
import NotificationContainer from '../Notifications/NotificationContainer'
import AddContentPage from '../AddContentPage'
import EditContentPage from '../Content/EditContentPage'
import ViewContent from '../Content/ViewContentPage'

const Dashboard = () => {
  return(
      <div>
        <header className="auth-header">
        <AdminMenu/>
        <AdminProfileMenu/>
        </header>
        <main className="auth--main">
        <Route  path="/dashboard/content" component={Content} />
        <Route  path="/dashboard/users" component={UsersPage} />
        <Route  path="/dashboard/comments" component={Comments} />
        <Route  path="/dashboard/profile" component={Profile} />
        </main>
        <Toasts />
      </div>
  )
}


export default Dashboard