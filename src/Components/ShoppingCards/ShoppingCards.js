import React, {useState, useEffect} from 'react'

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
    <div className="shoppingCardsContainer">
    {state.map((values)=>{
        return(
            <>
            <div className="shoppingCardsBox">
                {/* <img src={values.image} alt="product" className="shoppingCardsImage"/> */}
                <h1 className="shoppingCardsTitle">
                    {values.title}
                </h1>
                <p className="shoppingCardsDescription">
                    {values.description}
                </p>
            </div>
            </>
        )
    })}
    </div>
  )
}

export default ShoppingCards