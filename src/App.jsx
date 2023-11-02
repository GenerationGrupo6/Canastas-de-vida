import React from 'react'
import './App.css'
import NavBar from './Component/NavBar/NavBar.jsx'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Page3 from './Pages/Page3'


function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/Page3' element={<Page3/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>     
    </>
  )
}
