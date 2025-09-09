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
      </Routes >
    </>
  )
}

export default App
