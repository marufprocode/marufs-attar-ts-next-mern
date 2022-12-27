import React from 'react';
import products from '../utilities/products'
import ProductItem from './ProductItem';

const ProductSection = () => {
    return (
        <div className='my-6'>
        <h1 className='text-2xl font-bold text-center'>All Products</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 place-items-center'>
            {
                products.map((product, idx) => <ProductItem key={idx} product={product}/>)
            }
        </div>   
        </div>
    );
};

export default ProductSection;