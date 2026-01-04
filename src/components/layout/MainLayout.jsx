import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const MainLayout = () => {
  return (
    <div className="bg-neutral-800 w-full h-screen p-2">
      <div className="flex h-full">
        {/* Sidebar */}
        <Sidebar />

        {/* Right Section */}
        <div className="flex-1 flex flex-col">
          {/* Navbar */}
          <Navbar />

          {/* Page Content */}
          <div className="flex-1 overflow-y-auto rounded-md bg-red-300 mt-2 ml-2  scrollbar-hide overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLayout
