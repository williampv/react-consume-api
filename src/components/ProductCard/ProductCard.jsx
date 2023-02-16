import './ProductCardStyles.css'

export const ProductCard = ({ id, title, price, image }) => {
    return(
        <div>
            <a href={`/product/${id}`} className="productInfo">{title}</a>
            <img className="productImage" src={image} alt="Product Image"></img>
            <p>Price: {price}</p>
        </div>
    )
}