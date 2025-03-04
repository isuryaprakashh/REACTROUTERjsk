import React from 'react'
import { Link,Route,Routes } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Registration from './Registration';
import Login from './Login';
import Contact from './Contact';
import NotFound from './NotFound';
import "./style.css"

export default function NavBar() {
  return (
    <div>
      <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="registration">Registration</Link>
      <Link to="login">Login</Link>
      <Link to="contact">Contact</Link>
      </div>




      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/about" Component={About}/>
        <Route path="/registration" Component={Registration}/>
        <Route path="login" Component={Login}/>
        <Route path="contact" element={<Contact/>}/> 
        <Route path="*" Component={NotFound}/>
      </Routes>
    </div>
  )
}
