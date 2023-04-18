import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import './App.scss'
import Login from './pages/Login/Login'
function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<Login/>} path="/login"></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
