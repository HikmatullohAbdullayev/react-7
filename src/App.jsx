import { useState } from 'react'
import { Button } from "./components/ul/button"
import { HomeIcon } from './assets/icon/button-icon.jsx'
import './App.css'

function App() {

  return (
    <>
    <div className='container'>
      <div>
        
         <Button   variant="second" >send</Button> 
          <Button   variant="frist" >send</Button>
      </div>
      
    </div>
    </>
  )
}

export default App
