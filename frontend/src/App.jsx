import React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/common/Layout'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Listing from './pages/Listing'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/about' element={<About />} />
         {/* I will add more routes here later like about and contact */}
        </Route>
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
    </Router>

    {/* Global Toasts here */}
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
