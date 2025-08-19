import React from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/common/Layout'
import { BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
         {/* I will add more routes here later like about and contact */}
        </Route>
        {/* <Route path='/login' element={<Login />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
