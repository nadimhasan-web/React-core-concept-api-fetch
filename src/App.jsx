import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Team from './team'
import Users from './users'
import Friends from './friends'

function App() {
  
  function buttonHandle(){
    alert("hello")
  }

  return (
    <>
      <h2>React core concept</h2>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <button onClick={buttonHandle}>Click me</button>
      
      
    </>
  )
}

export default App
