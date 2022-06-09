import React from 'react'
import ShoppingCards from '../../Components/ShoppingCards/ShoppingCards'

const Home = (props) => {
  const {products, onAdd} = props;

  return (
    <>
    {products.map((product) =>(
      <ShoppingCards key={product.id} product={product} onAdd={onAdd} />
    ))}
    </>
   
  )
}

export default Home