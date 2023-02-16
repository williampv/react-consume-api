import './App.css';
import { ProductCard } from './components/ProductCard/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([])

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((result)=>{
      setProducts(result.data)
      console.log(products)
    })
  }, [])

  return (
    <div className="App">
      <h1>Products List</h1>
      {products && products.map((product)=>{
        return(
          <ProductCard title={product.title} price={product.price}/>
        )
      })}
    </div>
  );
}

export default App;
