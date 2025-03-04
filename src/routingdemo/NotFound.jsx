import React from 'react'
import notfound from "./notfound.png"

export default function NotFound() {
  return (
    <div style={{textAlign:"center"}}>
      <img src={notfound} alt="Image Not Found" width="50%" height="auto"/>
    </div>
  )
}
