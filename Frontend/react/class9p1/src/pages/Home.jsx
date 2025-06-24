import { useContext, useState } from "react";
import Card from "../components/Cards";
import "../components/Card.css";
import { bitesContext } from "../context/MyContext";

function Home() {
  const { products } = useContext(bitesContext);
  const categoryOptions = [...new Set(products.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minRating, setMinRating] = useState("");

 const filteredProducts = products.filter((item) => {
    const matchesCategory = selectedCategory === "" || item.category === selectedCategory;
    const matchesPrice =  maxPrice === "" || item.productPrice <= parseFloat(maxPrice);
    const matchesRating = minRating === "" || item.rating >= parseFloat(minRating);
    return matchesCategory && matchesPrice && matchesRating;
  });

  return (
    <div>
      {/* Search and Filter Inputs */}
      <div style={{ display: "flex", gap: "1rem", margin: "1rem" }}>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="category-select">
          <option value="">All Categories</option>
          {categoryOptions.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <input type="number" placeholder="Max Price" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
        <input type="number" placeholder="Min Rating (e.g. 4.0)" value={minRating} onChange={(e) => setMinRating(e.target.value)} step="0.1" min="0" max="5" />
      </div>

      {/* Filtered Cards */}
      <div className="card-container">
        {filteredProducts.length ? (
          filteredProducts.map((item, index) => (
            <Card key={index} data={item} />
          ))
        ) : (
          <p style={{ textAlign: "center", color: "gray" }}>No items match your filters.</p>
        )}
      </div>
    </div>
  );
}

export default Home;