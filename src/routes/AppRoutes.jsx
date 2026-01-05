import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/home/Home'
import Project from '../pages/projects/Project'
import Contact from '../pages/contact/Contact'

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
        </Route>
    </Routes>
  )
}

export default AppRoutes