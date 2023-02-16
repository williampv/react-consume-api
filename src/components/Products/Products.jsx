import { ProductCard } from '../ProductCard/ProductCard';
import './Products.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Products = ()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products').then((result)=>{
        setProducts(result.data)
        })
    }, [])

    return (
        <div className="App">
            <h1>Products List</h1>
            <div className="gridContainer">
                {products && products.map((product)=>{
                    return(
                    <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    image={product.image}
                    price={product.price}/>
                    )
                })}
            </div>
        </div>
    )
}