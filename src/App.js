import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ShoppingBasket from './Pages/shoppingBasket/ShoppingBasket';
import data from './data/data'

function App() {

  const { products } = data

  //setting state for shopping basket
  const [shoppingBasket,setShoppingBasket] = useState([])

  
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home products={products} />} />
        <Route path="shopping-basket" exact element={<ShoppingBasket shoppingBasket={shoppingBasket} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
