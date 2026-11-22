import React from 'react'
import { FaHome } from "react-icons/fa";
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <>
      {/* <div className="bg-blue-500">
        App 
        <FaHome className="text-red-500"/>
      </div> */}

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<RootLayout/>}>
            
              <Route path="/" element={<Home/>}></Route>
              <Route path="/product" element={<Product/>}></Route>
              <Route path="/contact" element={<Contact/>}></Route>
              <Route path="/about" element={<About/>}></Route>
              <Route path="/product/:id" element={<ProductDetail/>}></Route>
            
            </Route>


        </Routes>
      </BrowserRouter>

    </>
  )
} 

export default App