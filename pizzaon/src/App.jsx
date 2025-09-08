import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bookreserve from './componet/booknowreserve'
import Bookbanner from './componet/booknowbanner'
import Reservation from './componet/Reservation'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bookbanner />
      <Bookreserve />
      <Reservation/>
    </>
  )
}

export default App
