import React from 'react';
import './ShoppingCards.css';

const ShoppingCards = (props) => {

    const { product } = props
    // //Setting state
    // const [state, setState] = useState([]);

    // useEffect(()=>{
    //     //Calling the API
    //     const fakeStoreApi = async() => {
    //     const response = await fetch("https://fakestoreapi.com/products");
    //     const jsonData = await response.json();
    //     // console.log(jsonData)
    //     setState(jsonData);
    // }
    //     fakeStoreApi()
    // }, [])

  return (
    <div className="shopping-card-container">
        <div className='shopping-card'>
            <div className='shopping-card-body'>
                <img src={product.image} alt="products" className='shopping-card-image'/>
                <h2 className='shopping-card-title'>
                    {product.title}
                </h2>
                <p className='shopping-card-description'>
                    {product.description}
                </p>
                <p className='shopping-card-price'>
                    £{product.price}
                </p>
            </div>
            <button className='shopping-card-button' >Add to cart</button>
        </div>
    </div>
  )
}

export default ShoppingCards