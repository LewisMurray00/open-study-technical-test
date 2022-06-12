import React from 'react'
import './ShoppingBasket.css'

const ShoppingBasket = (props) => {

  const {shoppingBasket, onAdd, onRemove} = props

  //Creating the summary of the basket

  //Working out the item price
  const itemsPrice = shoppingBasket.reduce((acca, current) => acca + current.price * current.qty, 0)

  return (
    <>
      <h1 className='shopping-basket-header'>Shopping Cart</h1>

      <div>
        {shoppingBasket.length === 0 && 
        <p className='shopping-basket-cart'>
          Your Cart is empty !
        </p>}
      </div>
      
      {shoppingBasket.map((item) => (
        <div key={item.id} className='shopping-basket-container'>
          <div className='shopping-basket-card'>
            <img className='shopping-basket-image' src={item.image} alt={item.title} />
            <h2 className='shopping-basket-title'>
              {item.title}
            </h2>
            <div className='shopping-basket-buttons'>
              <button className='shopping-basket-button-add' onClick={()=>onAdd(item)}>+</button>
              <button className='shopping-basket-button-remove' onClick={()=>onRemove(item)}>-</button>
            </div>
            <p className='shopping-basket-price'>
              {item.qty} x £{item.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}

        {/* Displaying the shopping basket summery */}
        {shoppingBasket.length !== 0 && (
          <>
            <div className='shopping-basket-summary-container'>
              <p className='shopping-basket-summary-title'>Cost of items:</p>
              <p className='shopping-basket-summary-price'> £{itemsPrice.toFixed(2)}</p>
            </div>
          </>
        )}
    </>
    
  )
}

export default ShoppingBasket