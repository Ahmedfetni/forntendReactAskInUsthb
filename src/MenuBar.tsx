import React from 'react'
import MenuSearchBar   from './MenuSearchBar'

function MenuBar() {
  return (
    <div>
      <ul>
        <MenuSearchBar/>
        <li>Main Feed</li>
        <li>Departments</li>
        <li>Notifications</li>
        <li>Profile</li>
      </ul>
    </div>
  )
}

export default MenuBar
