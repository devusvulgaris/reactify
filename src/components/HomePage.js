import React from 'react'
import { connect } from 'react-redux'
import { loadPage } from "../AC"
import { withRouter } from 'react-router-dom'
import  Piechart from './charts/Piechart/Piechart'
import  Barchart from './charts/Piechart/Barchart'

class HomePage extends React.Component {


  componentWillReceiveProps(nextProps) {
    //
    //console.error(isFrontPage.length)
    //console.error('page loaded: ', this.props.pages.frontpageLoaded)
    if (!nextProps.pages.frontpageLoaded && !nextProps.pages.frontpageLoading ) {
    const { router, settings } = this.props
      if (nextProps.settings.pages != undefined) {
        const frontPage = nextProps.settings.pages.filter(page => page.name == 'front')
        // const pageToLoad = nextProps.pages.items.filter(page => page.nid[0].value == '53' )
        // console.warn(pageToLoad)
        //


        this.props.loadPage(frontPage[0].id, 'front')
        console.warn(frontPage[0].id)
        // if (nextProps.router.location.pathname == '/' && this.props.pages.items.length === 0) {
      }
  }
    /*if (nextProps.settings.pages != undefined && nextProps.router.location.pathname === '/') {
      console.warn('hui')
      const {pages} = nextProps.settings
      let frontPageId = nullYYings.pages[0].id
      console.warn(frontPageId)
      frontPageId = nextProps.sett
      if (frontPageId) {
        this.props.loadPage(frontPageId)
      }
    } */

    // const currentPage = router.location.pathname
    /*const currentPage = null

     if (frontPageId && currentPage == '/') {
       this.props.loadPage(frontPageId)
     } */
  }

  getHomePage() {
    const settingsFrontPage = this.props.settings.pages.filter(page => page.name == 'front')
  //  console.log(this.props.pages.frontpageLoaded)
    const { pages } = this.props
    console.log(pages)
    if (pages != undefined) {
      if (pages.frontpageLoaded) {

        const pagesArr = this.props.pages.items
        if (pagesArr !== undefined) {
          if (pagesArr.length > 0) {

            const frontPage = pagesArr.filter(page => page.nid[0].value === +settingsFrontPage[0].id)
            console.warn(frontPage.length)
            console.warn(typeof +settingsFrontPage[0].id)
            console.warn(typeof frontPage[0].nid[0].value)
            if (frontPage.length) {
              return (
                  <div>
                    <h2>{frontPage[0].title[0].value}</h2>
                    <div
                        dangerouslySetInnerHTML={{__html: frontPage[0].body[0].value}}/>
                  </div>
              )
            }
          }
        }
      }

    }

    return  (<div>
      <h3>Home page</h3>
      <p>This is homepage placeholder text.
        Please specify homepage in theme settings.</p>
    </div>)


  }

  render() {
    return(
        <div>
          { this.getHomePage() }
          <Piechart />
          <Barchart />
        </div>
    )
  }
}

export default connect(state => ({
      settings: state.settings,
      pages: state.pages,
      router: state.router
    }), {loadPage}, null, { pure: false }

)(HomePage)