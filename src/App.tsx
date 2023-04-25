import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import './App.scss'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Shop from './pages/Shop/Shop'
import Blog from './pages/Blog/Blog'
import Category from './pages/Category/Category'
import Product from './components/Product/Product'
import ProductDetail from './components/ProductDetail/ProductDetail'
import AuthLayout from './components/Layouts/AuthLayout/AuthLayout'
import NotFound from './pages/NotFound/NotFound'
function App() {
  const PageLayout = () => (
    <>
      <Header />
      <Outlet />
    </>
  )
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PageLayout />}>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Login />} path='/login'></Route>
            <Route element={<Register />} path='/register'></Route>
            <Route element={<Shop />} path='/shop'></Route>
            <Route element={<Blog />} path='/blog'></Route>
            <Route element={<Category />} path='/category/:keyword' />
            <Route element={<ProductDetail />} path='/product/:slug' />
          </Route>
          <Route element={<NotFound />} path='*'></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
