import React, {useState, useEffect} from 'react';
import './ShoppingCards.css';

const ShoppingCards = () => {

    //Setting state
    const [state, setState] = useState([]);

    useEffect(()=>{
        //Calling the API
        const fakeStoreApi = async() => {
        const response = await fetch("https://fakestoreapi.com/products");
        const jsonData = await response.json();
        // console.log(jsonData)
        setState(jsonData);
    }
        fakeStoreApi()
    }, [])

  return (
    <div className="shopping-card-container">
 {state.map((values)=>{
        return(
            <>
            <div className='shopping-card'>
                <div className='shopping-card-body'>
                    <img src={values.image} alt="products" className='shopping-card-image'/>
                    <h2 className='shopping-card-title'>
                        {values.title}
                    </h2>
                    <p className='shopping-card-description'>
                        {values.description}
                    </p>
                    <p className='shopping-card-price'>
                        £{values.price}
                    </p>
                </div>
                <button className='shopping-card-button'>Add to cart</button>
            </div>
            </>
        )
    })}
    </div>
  )
}

export default ShoppingCards