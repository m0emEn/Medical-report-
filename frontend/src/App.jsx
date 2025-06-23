import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Chatbot from './pages/Chatbot';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-blue-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;