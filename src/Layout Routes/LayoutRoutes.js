import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Home from '../components/pages/Home'
import Plans from '../components/pages/plans/Plans'
import Courses from '../components/pages/courses/Courses'
import Aboutus from '../components/pages/about us/Aboutus'
import Contactus from '../components/pages/contactus/Contactus'
import Support from '../components/pages/supportus/Support'
function LayoutRoutes() {
  return (
  <Router>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Educational-App' element={<Home/>} />
        <Route path='/services' element={<Plans/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/aboutus' element={<Aboutus/>} />
        <Route path='/contact' element={<Contactus/>} />
        <Route path='/support' element={<Support/>} />
        

    </Routes>
    <Footer/>
  </Router>
  )
}

export default LayoutRoutes