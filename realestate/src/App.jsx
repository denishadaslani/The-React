import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router'
import Header from './Compontes/Header'
import AddProperty from './Compontes/AddProperty/AddProperty'

// import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/"  element={<h1>Home</h1>}/>
       <Route path="/AddProperty" element={<AddProperty/>}/>
      </Routes>
    </>
  )
}

export default App
