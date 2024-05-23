import React from 'react'
import Nav from './Nav'
import { Outlet, Link } from "react-router-dom";
function Layout() {
  return (
    <div>
      <Nav/>
    <Outlet></Outlet>
      
    </div>
  )
}

export default Layout
