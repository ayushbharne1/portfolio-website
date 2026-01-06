import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../components/layout/MainLayout'
import Home from '../pages/home/Home'
import Project from '../pages/projects/Project'
import Contact from '../pages/contact/Contact'
import Skills from '../pages/skills/Skills'
import About from '../pages/about/About'
import Experience from '../pages/experience/Experience'
const Hireme = React.lazy(() => import('../pages/hireme/Hireme'))

const AppRoutes = () => {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/about' element={<About />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='/hireme' element={<React.Suspense fallback={<div>Loading...</div>}><Hireme /></React.Suspense>} />
        </Route>
    </Routes>
  )
}

export default AppRoutes