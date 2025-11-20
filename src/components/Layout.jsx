import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <footer className="py-10 text-center text-slate-500">
        © {new Date().getFullYear()} JYAD Financial. All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
