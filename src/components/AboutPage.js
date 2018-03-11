import React from 'react'
import { connect } from 'react-redux'
import {loadPage} from '../AC'

class AboutPage extends React.Component {

 /* componentWillReceiveProps(nextProps) {
    if (nextProps.settings.pages !== this.props.settings.pages || nextProps.router.location.pathname == '/about') {
      // alert('new props')
      if (nextProps.settings.pages.length > 0) {
        const aboutPage = nextProps.settings.pages.filter(page => page.name == 'about')
        console.warn(aboutPage)
        const aboutPageId = aboutPage[0].id
        console.warn('Apage', aboutPageId)
        if (aboutPageId) {
          this.props.loadPage(aboutPageId)
        }
      }
    }
  } */

 /* componentWillReceiveProps(nextProps) {

    if (this.props.settings.pages !== nextProps.settings.pages) {
      const { router, settings } = this.props

      // const pageToLoad = nextProps.pages.items.filter(page => page.nid[0].value == '53' )
      // console.warn(pageToLoad)
      //
      const homePage = nextProps.settings.pages.filter(page => {
        return page.name == 'front'
      })
      console.warn(homePage[0].name)

      this.props.loadPage(homePage[0].id)
      // if (nextProps.router.location.pathname == '/' && this.props.pages.items.length === 0) {

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
     }
  } */

  componentWillReceiveProps(nextProps) {
    //const isAboutPage = nextProps.settings.pages.filter(page => page.name == 'about')

    console.warn(nextProps.pages)

    if (nextProps.router.location.pathname == '/about' && !nextProps.pages.aboutpageLoaded && !nextProps.pages.aboutpageLoading ) {
      const { router, settings } = this.props

      // const pageToLoad = nextProps.pages.items.filter(page => page.nid[0].value == '53' )
      // console.warn(pageToLoad)
      //
      const aboutPage = nextProps.settings.pages.filter(page => {
        return page.name == 'about'
      })
      console.warn(aboutPage[0].id)
      this.props.loadPage(aboutPage[0].id, 'about')
      // if (nextProps.router.location.pathname == '/' && this.props.pages.items.length === 0) {

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


  getAboutPage() {
    const settingsFrontPage = this.props.settings.pages.filter(page => page.name == 'about')
    const { pages } = this.props
    if (pages !== undefined) {
     if (pages.aboutpageLoaded) {
       const pagesArr = this.props.pages.items
       if (pagesArr !== undefined) {
         if (pagesArr.length > 0) {

           const aboutpage = pagesArr.filter(page => page.nid[0].value === +settingsFrontPage[0].id)
           console.warn(aboutpage)
           if (aboutpage.length) {
             return (
                 <div>
                   <h2>{aboutpage[0].title[0].value}</h2>
                   <div
                       dangerouslySetInnerHTML={{__html: aboutpage[0].body[0].value}}/>
                 </div>
             )
           }
         }
       }

     }
    }

    return  (<div>
      <h3>About us page</h3>
      <p>This is about page placeholder text.
        Please specify about us page in theme settings.</p>
    </div>)
  }
  render() {
    return(
    <div>
      { this.getAboutPage() }
    </div>)
  }
}

export default connect(state => ({
  settings: state.settings,
  pages: state.pages,
  router: state.router
}), {loadPage}, null, { pure: false })
(AboutPage)