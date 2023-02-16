import './App.css';
import { ProductCard } from './components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([])
  return (
    <div className="App">
      <h1>Products List</h1>
      <ProductCard title="product test" price="12.50"/>
    </div>
  );
}

export default App;
