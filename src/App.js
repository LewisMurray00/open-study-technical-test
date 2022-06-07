import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import ShoppingBasket from './Pages/shoppingBasket/ShoppingBasket';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="shopping-basket" exact element={<ShoppingBasket />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
