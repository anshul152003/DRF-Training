import Card from '../components/Card.jsx'
import '../components/Card.css'

function MyCart({cartItem}){
    console.log(cartItem);
    return (
        <div>
            {cartItem.length === 0 ? (
                <div className="empty-cart">
                    <p>There is nothing in cart</p>
                </div>
            ) : (
                <div className="card-container">
                    {cartItem.map((item, index) => (
                     <Card key={index} data={item} /> ))}
                </div>
            )}
        </div>
    )
}

export default MyCart;