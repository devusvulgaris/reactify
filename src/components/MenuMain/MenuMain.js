import React from 'react'

const MenuMain = props => {
  const {menu, auth, settings, dispatch} = props
  const renderMenu = menu.map((item) => {
    const reference = '/' + item.title.toLowerCase()
    return <Menu to = {reference} linkText = {item.title} key = {item.id} />
  })
  return (
      {renderMenu}
  )
}

export default MenuMain