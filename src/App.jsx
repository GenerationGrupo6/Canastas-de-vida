
import './App.css'
import NavBar from './Component/NavBar/NavBar.jsx'
import Footer from './Component/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NuestrasHistorias from './Pages/NuestrasHistorias'


export default function App() {
  

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <main>
        <Routes>
          <Route path='/Page3' element={<NuestrasHistorias/>}/>
        </Routes>
        </main>
        <Footer/>
      </BrowserRouter>     
    </>
  )
}
