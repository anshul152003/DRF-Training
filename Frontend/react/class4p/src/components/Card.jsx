import { useState } from 'react';
import './Card.css'

function Card({data,setCartItem}){

    const [trackBtn, setTrackBtn] = useState(true);
    function handleCardItem(card){
        console.log("btn click hona", card);

        //this add an Object to 
        //setCartItem(data);

        //this add an array 
        // setCartItem([data]);

        // setCartItem((oldData)=> { 
        //     return [...oldData,data];
        // })

        setCartItem((oldData) => {
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
                {/* <div>Description: {data?.description}</div> */}
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
                <div className='cart-container'>
                    <div className='add-to-cart'><button id='btnAdd' onClick={() => {handleCardItem(data)}}>Add to cart</button></div>
                </div>  
            </div>
        </div>
    )
}

export default Card;