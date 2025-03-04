import React from 'react'
export default function Registration() 
{
  return (
    <div className='form-container'>
      <form>
        <label>Enter Name</label>
        <input type="text" id="name" required/>
        <label>Select Gender</label>
        <select id="gender" required>
          <option value="">--Select--</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <label>Enter Email</label>
        <input type="email" id="email" required/>
        <label>Enter Password</label>
        <input type="password" id="password" required/>
        <label>Enter Contact</label>
        <input type="number" id="contact" required/>
        <label>Enter Location</label>
        <input type="text" id="location" required/>
      <input type="submit"/>
      <input type="reset"/>
      </form>
    </div>
  )
}
