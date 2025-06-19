import { useState } from 'react';
import './Card.css'

function Card({data, setCartItem, cartItem}){

    const [trackBtn, setTrackBtn] = useState(true);
    let [count,setCount] = useState(data?.quantity);

    const alreadyInCart = cartItem?.find((item) => item?.id === data?.id);

    function removeFromCart(id){
        const filterArray = cartItem?.filter((item) => item.id !== id);
        setCartItem(filterArray);
    } 

    function incrementCount(){
        console.log("hoga increment");
        setCount(++data.quantity);
    }

    function decrementCount(){
        console.log("hoga decrement");
        setCount(() => {
            if(data.quantity === 1){
                removeFromCart(data.id);
                return;
            }
            return --data.quantity;
        });
    }

    function handleCardItem(data){
        setCartItem((oldData) => {
            const alreadyInCart = cartItem?.some((item) => item?.id === data?.id);
            if (alreadyInCart) {
                alert("Already in Cart"); 
                return oldData; 
            }
            return [...oldData, data];
        });   
    }
    return (
        <div className="card">
            <img src={data?.image} alt="Food" className="card-image" />
            <div className="card-body">
                <div className="card-title">Name: {data?.productName}</div>
                <div>Rating: ⭐{data?.rating}</div>
                <div>Made By: {data?.madeBy}</div>
                <div className="card-price">
                    Price: <span className="discount">${data?.productPrice}</span>{' '}
                    <span className="original">${data?.actualPrice}</span>
                </div>
                <div>Quantity: {data?.quantity}</div>
                 <div className="card-description">
                    {trackBtn ? (
                        <div>
                            <p>{data?.description?.substr(0, 75)}...</p>
                            <button className="toggle-btn" onClick={() => setTrackBtn(false)}>Read More</button>
                        </div>
                    ) : (
                        <div>
                            <p>{data?.description}</p>
                            <button className="toggle-btn" onClick={() => setTrackBtn(true)}>Read Less</button>
                        </div>
                    )}
                </div>

                {
                    alreadyInCart !== undefined ? (
                        <div className='cart-container'>
                            <div className='add-to-cart'>
                                <button onClick={() => {decrementCount()}}>-</button>
                                <p>{alreadyInCart?.quantity}</p>
                                <button onClick={() => {incrementCount()}}>+</button>
                            </div>
                        </div>
                    ) : (
                        <div className='cart-container'>
                            <div className='add-to-cart'><button id='btnAdd' onClick={() => {handleCardItem(data)}}>Add to cart</button></div>
                        </div>  
                    )
                }
            </div>
        </div>
    )
}

export default Card;