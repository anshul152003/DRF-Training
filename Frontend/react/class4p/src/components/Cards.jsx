import { useState } from 'react';
import './Card.css'

function Card({data}){

    const [trackBtn, setTrackBtn] = useState(true);
    return (
        <div className="App">
            <img src={data?.image} alt="Food" />
            <div>
                <div>Name: {data?.productName}</div>
                <div>Rating: ⭐{data?.rating}</div>
                <div>Made By: {data?.madeBy}</div>
                <div>Price: ${data?.productPrice} <span>${data?.actualPrice}</span></div>
                <div>Quantity: {data?.quantity}</div>
                {/* <div>Description: {data?.description}</div> */}
                <div>
                    {trackBtn === true ? (
                        <div>
                            <p>
                                {data?.description.substr(0,75)}
                                <div>
                                    <button onClick={()=>{setTrackBtn(!trackBtn)}}>Read More</button>
                                </div>
                            </p>
                        </div> ) : (
                        <div>
                            <p>
                                {data?.description}
                            </p>
                                <button onClick={() => {setTrackBtn(!trackBtn)}}>Read Less</button>
                        </div>)}
                </div>
                        
            </div>
        </div>
    )
}

export default Card;