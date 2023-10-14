import { useState } from 'react'
import { Route, Routes } from 'react-router'
import { MainLayuot } from './layout/main-layout'
import { Home } from './pages/home'
import { Edit } from './pages/edit'
import { Post } from './pages/post'
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayuot/>}>
          <Route index element ={<Home/>}/>
          <Route path='edit' element ={<Edit/>}/>
          <Route path='post' element ={<Post/>}/>
        </Route>
      </Routes>
      
    </>
  )
}

export default App
