// import Card from "../components/Cards"
// import { useContext } from "react"
// import "../components/Card.css"
// import { bitesContext } from "../context/MyContext"
// function Home() {
//   const { products } = useContext(bitesContext)
//   // console.log("Products ",products)

//   return (
//     <div className="card-container">
//       {products?.map((item, index) => (
//         <div key={index}>
//           <Card data={item} />
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Home

import Card from "../components/Cards";
import { useContext, useState } from "react";
import "../components/Card.css";
import { bitesContext } from "../context/MyContext";
import "./Home.css"; 
function Home() {
  const { products } = useContext(bitesContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products?.filter((item) =>
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-wrapper">
      <input
        type="text"
        placeholder="Search by category (e.g. Fast Food, Indian Sweets)"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <div className="card-container">
        {filteredProducts?.length > 0 ? (
          filteredProducts.map((item, index) => (
            <div key={index}>
              <Card data={item} />
            </div>
          ))
        ) : (
          <p className="no-results">No items found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
