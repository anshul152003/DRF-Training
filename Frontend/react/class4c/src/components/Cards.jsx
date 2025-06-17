import './Card.css'

function Card({data}){
    return (
        <div className="App">
            <img src={data?.image} alt="Food" />
            <div>
                <div>Name: {data?.productName}</div>
                <div>Rating: ⭐{data?.rating}</div>
                <div>Made By: {data?.madeBy}</div>
                <div>Price: ${data?.productPrice} <span>${data?.actualPrice}</span></div>
                <div>Quantity: {data?.quantity}</div>
                <div>Description: {data?.description}</div>
            </div>
        </div>
    )
}

export default Card;