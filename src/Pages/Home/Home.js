import React from 'react'
import ShoppingCards from '../../Components/ShoppingCards/ShoppingCards'

const Home = (props) => {
  const {products} = props;

  return (
    <>
    {products.map((product) =>(
      <ShoppingCards key={product.id} product={product} />
    ))}
    </>
   
  )
}

export default Home