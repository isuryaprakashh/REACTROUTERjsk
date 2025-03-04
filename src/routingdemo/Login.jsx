import React from 'react'

export default function Login() 
{
   
  return (
    <div className='form-container'>
      <form>
        <label>Enter Email</label>
        <input type="email" id="email" required/>
        <label>Enter Password</label>
        <input type="password" id="password" required/>
      <input type="submit" value="Login"/>
      <input type="reset" value="Clear"/>
      </form>
    </div>
  )
}
