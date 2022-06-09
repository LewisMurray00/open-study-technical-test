import React from 'react'

const ShoppingBasket = (props) => {

  const {shoppingBasket, onAdd, onRemove} = props

  return (
    <>
      <div>Shopping Cart</div>

      <div>
        {shoppingBasket.length === 0 && <div>
          Cart is empty
        </div>}
      </div>
      
      {shoppingBasket.map((item) => (
        <div key={item.id} className='shopping-basket-container'>
          <div className='shopping-basket-title'>
            {item.title}
          </div>
          <div className='shopping-basket-buttons'>
            <button onClick={()=>onAdd(item)}>+</button>
            <button onClick={()=>onRemove(item)}>-</button>
          </div>
          
          <div>
            {item.qty} x £{item.price.toFixed(2)}
          </div>
          
        </div>
      ))}
    </>
    
  )
}

export default ShoppingBasket