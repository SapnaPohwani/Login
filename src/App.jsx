import React from 'react'
import './index.css'
import Login from './login/index.jsx'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
