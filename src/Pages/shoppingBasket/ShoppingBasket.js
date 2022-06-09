import React from 'react'

const ShoppingBasket = (props) => {

  const {shoppingBasket} = props

  return (
    <>
      <div>Shopping Cart</div>
      <div>
        {shoppingBasket.length === 0 && <div>
          Cart is empty
        </div>}
      </div>
    </>
    
  )
}

export default ShoppingBasket