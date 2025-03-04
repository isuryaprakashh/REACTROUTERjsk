// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import NavBar from './routingdemo/NavBar'
// import './App.css'

function App() {

  
  return (
    <div>
        <h2 style={{textAlign:"center"}}>React Routing / Navigation Demo</h2>  
        <BrowserRouter>
        <NavBar/>
        </BrowserRouter>  
    </div>
  )
}

export default App
