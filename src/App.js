import './App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ShoppingBasket from './Pages/ShoppingBasket/ShoppingBasket';
import data from './data/data'

function App() {

  const { products } = data

  //setting state for shopping basket
  const [shoppingBasket,setShoppingBasket] = useState([])

  //Adding a function to allow to add to basket
  const onAdd = (product) => {
    const exist = shoppingBasket.find(x => x.id === product.id)
    if(exist){
      setShoppingBasket(shoppingBasket.map((x) => x.id === product.id ? {...exist, qty: exist.qty + 1} : x
        )
      )
    } else {
      setShoppingBasket([...shoppingBasket, {...product, qty: 1}])
    }
  }

  //Function that handles the remove item from basket ability
  const onRemove = (product) => {
    const exist = shoppingBasket.find((x)=> x.id === product.id)
    if(exist.qty === 1){
      setShoppingBasket(shoppingBasket.filter((x)=> x.id !== product.id))
    } else {
      setShoppingBasket(shoppingBasket.map((x)=> x.id === product.id ? {...exist, qty: exist.qty - 1} : x))
    }
  }

  return (
    <>
    <Router>
      <Navbar countShoppingBasketItems={shoppingBasket.length}/>
      <Routes>
        <Route path="/" exact element={<Home products={products} onAdd={onAdd} />} />
        <Route path="shopping-basket" exact element={<ShoppingBasket shoppingBasket={shoppingBasket} onAdd={onAdd} onRemove={onRemove} />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
