import { Link } from 'react-router-dom'
import './ProductCardStyles.css'

export const ProductCard = ({ id, title, price, image, description }) => {
    return(
        <div>
            <h2 className="productInfo">
                <Link to={`/product/${id}`}>
                    {title}
                </Link>
            </h2>
            <img className="productImage" src={image} alt="Product Image"></img>
            <p>Price: {price}</p>
            <p>{description && description}</p>
        </div>
    )
}