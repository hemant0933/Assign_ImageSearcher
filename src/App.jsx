import { useState } from 'react'
import './App.css'
import SearchComponent from './components/SearchComponent'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'

function App() {
  

  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<NoPage/>}/>
  </Routes>
  )
}

export default App
