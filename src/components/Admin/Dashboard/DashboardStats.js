import React from 'react'

import LocalizedText from '../../Localization/LocalizedText'

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faUsers, faComments, faFileAlt, faChessQueen } from '@fortawesome/fontawesome-free-solid'

const DashboardStats = ({dashboard}) => {

  if (dashboard.dashboardLoading) return <p>Stats are loading..</p>

  /*return(
      <div>
        {Object.keys(dashboard.dashboardStats).forEach( key =>
            <div>{key}:{dashboard.dashboardStats[key]}</div>)}
      </div>
  )*/
  return (
      <div className="auth--dashboard-stats">
        <div className="auth--dashboard-stat">
          <span className="stats-icon"><FontAwesomeIcon icon={faUsers} /></span>
          Users: <span className="stats-number">{dashboard.dashboardStats.usersTotal}</span>
        </div>
        <div className="auth--dashboard-stat">
            <span className="stats-icon">
             <FontAwesomeIcon icon={faChessQueen} /></span>
          <LocalizedText>Clients</LocalizedText>: <span className="stats-number">{dashboard.dashboardStats.clientsTotal}</span></div>
        <div className="auth--dashboard-stat">
            <span className="stats-icon">
              <FontAwesomeIcon icon={faFileAlt} /></span>
          Content: <span className="stats-number">{dashboard.dashboardStats.contentTotal}</span>
        </div>
        <div className="auth--dashboard-stat">
            <span className="stats-icon">
              <FontAwesomeIcon icon={faComments} /></span>
          Comments: <span className="stats-number">{dashboard.dashboardStats.commentTotal}</span>
        </div>
      </div>
  )
}

export default DashboardStats