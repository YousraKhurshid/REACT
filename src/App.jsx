import React, { useState } from 'react'
import {
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from './pages/Home'
import Products from './pages/Products'
import Signup from './pages/Signup'
import Login from './pages/Login.JSX'
import Page404 from './pages/Page404'
import NavigationBar from './Components/NavigationBar'
import './App.css';
import FooterSection from './Components/FooterSection'
import CategoryPage from './pages/CategoryPage';
import ProductsPage from './pages/ProductsPage';

function App() {

  const [user, setuser] = useState(true)
  return (
    <>
    <NavigationBar /> 
    {
      user
      ?
      (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<ProductsPage />} />
        <Route path="/products/category/:categoryName" element={<CategoryPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      )
      : 
      (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
      )

    }

    <FooterSection/>
          
    </>
    
      )
}

export default App
