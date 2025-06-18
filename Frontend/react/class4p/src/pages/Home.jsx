import Card from "../components/Card"
import  "../components/Card.css"
function Home({ product,setCartItem, cartItem }) {
  return (
    <div className="card-container">
      {product.map((item, index) => (
        <Card key={index} data={item} setCartItem={setCartItem} cartItem={cartItem}/>
      ))}
    </div>
  )
}

export default Home