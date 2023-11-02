
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
        <main>
        <Routes>
          <Route path='/Page3' element={<Page3/>}/>
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>     
    </>
  )
}

export default App
