import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import './App.scss'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Shop from './pages/Shop/Shop'
import Blog from './pages/Blog/Blog'
import Category from './pages/Category/Category'
import Product from './components/Product/Product'
function App() {

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<Login/>} path="/login"></Route>
        <Route element={<Register/>} path="/register"></Route>
        <Route element={<Shop/>} path="/shop"></Route>
        <Route element={<Blog/>} path="/blog"></Route>
        <Route element={<Product/>} path="/product"></Route>
        <Route element={<Category/>} path="/category/:keyword" />
      </Routes>
    </Router>
    </>
  )
}

export default App
