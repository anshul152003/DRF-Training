import Card from "../components/Card"
import  "../components/Card.css"
function Home({ product,setCartItem, cartItem, alreadyInCart }) {
  return (
    <div className="card-container">
      {product.map((item, index) => (
        <Card key={index} data={item} setCartItem={setCartItem} cartItem={cartItem} alreadyInCart={alreadyInCart}/>
      ))}
    </div>
  )
}

export default Home