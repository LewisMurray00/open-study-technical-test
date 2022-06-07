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
    <div className="shoppingCardContainer">
 {state.map((values)=>{
        return(
            <>
            {/* <div className="shoppingCardsBox">
                <img src={values.image} alt="product" className="shoppingCardsImage"/>
                <h2 className="shoppingCardsTitle">
                    {values.title}
                </h2>
                <p className="shoppingCardsDescription">
                    {values.description}
                </p>
            </div>
            </> */}
            <div className='shoppingCard'>
                <div className='shoppingCardBody'>
                    <img src={values.image} alt="products" className='shoppingCardImage'/>
                    <h2 className='shoppingCardTitle'>
                        {values.title}
                    </h2>
                    <p className='shoppingCardDescription'>
                        {values.description}
                    </p>
                </div>
                <button className='shoppingCardButton'>Add to cart</button>
            </div>
            </>
        )
    })}
    </div>
  )
}

export default ShoppingCards