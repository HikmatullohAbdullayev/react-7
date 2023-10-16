import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MainLayuot } from './layout/main-layout'
import { Home } from './pages/home'
import { Edit } from './pages/edit'
import { Post } from './pages/post'
import style from './App.module.css'

function App() {

  return (
    <>
     <div className={style.container}>
     <Routes>
        <Route path='/' element={ <MainLayuot/> }>
          <Route index element ={ <Home/> }/>
          <Route path='edit' element ={ <Edit/> }/>
          <Route path='post' element ={ <Post/> }/>
        </Route>
      </Routes>
     </div>
      
    </>
  )
}

export default App
