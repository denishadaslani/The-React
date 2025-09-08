import { Route, Router, Routes } from "react-router"
import Header from "./componet/header"
import Product from "./componet/product"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<h1 style={{ textAlign: "center" }}>Home page</h1>} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<h1>About page</h1>} />

      </Routes >
    </>
  )
}

export default App
