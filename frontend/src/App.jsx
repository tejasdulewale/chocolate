import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Home from './components/Home'
import UserRegistration from './components/UserRegistration'
import UserLogin from './components/UserLogin'
const App = () => {
  return (
    <div>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/register' element={<UserRegistration/>}/>
      <Route path='/login' element={<UserLogin/>}/>
    </Routes>
    </div>
  )
}

export default App