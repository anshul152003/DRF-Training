import { useState } from 'react';
import { products } from './utilis/Products.jsx';
import Card from './components/Cards.jsx';

function App() {
  const [product] = useState(products);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        padding: '24px',
        backgroundColor: '#f5f5f5',
      }}
    >
      {product.map((item, index) => (
        <Card key={index} data={item} />
      ))}
    </div>
  );
}

export default App;
