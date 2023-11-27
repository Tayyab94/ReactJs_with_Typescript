import React from 'react'
import { IProduct } from '../interfaces/IProduct'


interface ProductsProops {
    product: IProduct,
    HandleAddToCart(id: number): void
}


const ProdcutComponent = ({ product, HandleAddToCart }: ProductsProops) => {
    return (
        <div>
            <h3>{product.Id} - {product.name}</h3>
            <button onClick={() => HandleAddToCart(product.Id)}>Click Now</button>
        </div>
    )
}


export default ProdcutComponent
