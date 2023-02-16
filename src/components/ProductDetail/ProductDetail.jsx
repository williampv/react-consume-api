import { useParams } from 'react-router-dom'


export const ProductDetail = ()=>{
    let { id } = useParams()

    return(
        <div>
            <h1>Product Information</h1>
        </div>
    )
}