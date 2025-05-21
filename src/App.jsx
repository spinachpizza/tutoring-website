import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import Home from './home';
import Resources from './resources'
import FAQ from './faq';
import Contact from './contact';






function App() {

  return (

    <Router>

      <div className="main-container">

        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        
        <Footer />

      </div>

    </Router>
  )
}

export default App
