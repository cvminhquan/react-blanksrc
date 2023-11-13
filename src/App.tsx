import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home/Home'
import './App.scss'
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
          </Route>
          <Route element={<NotFound />} path='*'></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
