import React from 'react'
import Header from './Component/Header/Header'
import {Outlet} from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function Layout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
