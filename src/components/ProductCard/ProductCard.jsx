import './ProductCardStyles.css'

export const ProductCard = ({ title, price, image }) => {
    return(
        <div>
            <a href="#" className="productInfo">{title}</a>
            <img className="productImage" src={image} alt="Product Image"></img>
            <p>Price: {price}</p>
        </div>
    )
}