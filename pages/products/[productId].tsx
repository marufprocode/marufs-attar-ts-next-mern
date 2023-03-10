import { useRouter } from "next/router";
import React, { useContext } from "react";
import Layout from "../../layout/Layout";
import products from "../../utilities/products";
import Image from "next/image";
import { cartContext } from "../../utilities/CartContext";
import { toast } from "react-hot-toast";

const ProductDetails = () => {
  const { query } = useRouter();
  const {cartState, dispatchCart}:any = useContext(cartContext);
  const { productId } = query;

  const product = products.find((pdt) => pdt.productId === productId);

  const addToCartHandler = () => {
    const existItem = cartState.cart.cartItems.find((itm: { productId: string; }) => itm.productId === product?.productId)
    const quantity = existItem? existItem.quantity+1:1;
    if(product && product?.countInStock < quantity){
      return toast.error('Sorry! Not Enough Stock of this product')
    }
    dispatchCart({type:"ADD_TO_CART", payload:{...product, quantity}})
  }

  if (!product) return "Product Not Found";
  return (
    <Layout title={product?.name}>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <Image
              alt="ecommerce"
              className="lg:w-1/2 min-h-[400px] max-w-sm w-full lg:h-auto h-64 object-center rounded"
              src={product?.image}
              width="392"
              height="516"
              placeholder="blur"
              blurDataURL="https://dummyimage.com/400x400"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product?.brand.toUpperCase()}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product?.name}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[1, 2, 3, 4].map((itm, i) => (
                    <svg
                      key={i}
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  ))}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">
                    {product?.numReviews} Reviews
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{product?.description}</p>
              <div className="mt-6 pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex gap-3 mb-3 flex-wrap">
                  <p>
                    <strong>Volume:</strong> {product?.volume}
                  </p>
                  |
                  <p>
                    <strong>Type:</strong> {product?.fragranceType}
                  </p>
                  |
                  <p>
                    <strong>Fragrance:</strong> {product?.fragranceName}
                  </p>
                </div>
                <p>
                  <strong>Top Node: </strong>
                  {product?.topNote}
                </p>
                <p>
                  <strong>Middle Node: </strong>
                  {product?.middleNote}
                </p>
                <p>
                  <strong>Base Node: </strong>
                  {product?.baseNote}
                </p>
              </div>
              <div className="relative flex flex-col sm:flex-row items-left sm:items-center gap-3 sm:gap-0">
                <div className="">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${product?.price}
                  </span>
                  <br />
                  <span className="text-xs pl-1">
                    ({product?.countInStock} in stock.)
                  </span>
                </div>
                <button className="flex sm:ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-center justify-center place-self-start sm:place-self-center" onClick={addToCartHandler}>
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 transition-all hover:bg-red-300 hover:text-red-500 ml-4 absolute top-2 right-0 sm:static">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
