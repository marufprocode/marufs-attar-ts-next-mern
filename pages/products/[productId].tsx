import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../layout/Layout';
import products from '../../utilities/products';

const ProductDetails = () => {
    const {query} = useRouter();
    const {productId} = query;
    const product = products.find(pdt => pdt.productId === productId);
    if (!product) return "Product Not Found"
    return (
        <Layout title={product?.name}>
            <h1>{product?.name}</h1>
        </Layout>
    );
};

export default ProductDetails;