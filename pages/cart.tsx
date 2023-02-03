import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Layout from "../layout/Layout";
import { cartContext } from "../utilities/CartContext";

const CartPage = () => {
  const { cartState, dispatchCart }:any = useContext(cartContext);

  interface cartItemType {
    productId: string,
    name: string,
    image: string,
    price: number,
    brand: string,
    rating: number,
    numReviews: number,
    countInStock: number,
    volume: string,
    fragranceType: string,
    fragranceName: string,
    topNote: string,
    middleNote: string,
    baseNote: string,
    description: string,
    quantity:number
      }

  let totalPrice = cartState.cart?.cartItems.reduce((a:number,c:any) => a+c.price*c.quantity, 0)

  const handleRemoveItem = (item:cartItemType) => {
    console.log(item)
    dispatchCart({type:'REMOVE_ITEM', payload: item})
  }

  const handleUpdateQuantity = (item:cartItemType, action:string) => {
    const existItem = cartState.cart.cartItems.find((itm: { productId: string; }) => itm.productId === item?.productId)
    if((action === "minus" && existItem.quantity < 2) || (action === "plus" && existItem.quantity === existItem.countInStock)) {
      return;
    }  
    const updatedItem = action === "plus" ? {...existItem, quantity: existItem.quantity + 1} : {...existItem, quantity: existItem.quantity - 1};
    console.log(updatedItem)
    dispatchCart({type:"UPDATE_QTY", payload:updatedItem})
  }

  return (
    <Layout title="shopping-cart">
      <div className="min-h-[50vh] min-w-full">
        <div className="flex justify-center py-5">
          <div className="container">
            <div className="section-title bg-slate-200">
              <h3 className="uppercase text-xl font-bold text-sky-700 ls-1 p-2">
                My Cart
              </h3>
            </div>
            {cartState.cart?.cartItems?.length === 0 ? (
              <p className="text-red-600 text-center font-semibold text-md px-2 py-6 bg-slate-200">Items Not Found</p>
            ) : (
              <div className="grid gap-y-10 min-[992px]:grid-cols-[2fr_1fr] min-[1200px]:gap-x-14">
                <div className="cart-left">
                  <div className="cart-items grid pb-5 mt-6 border-b border-b-[rgba(0,0,0,0.1)] gap-y-5">
                    {cartState.cart?.cartItems.map((cartProduct:cartItemType) => (
                      <div className="cart-item grid min-[576px]:grid-cols-[30%_auto] min-[576px]:gap-x-3 min-[678px]:grid-cols-[150px_auto] min-[678px]:gap-x-4 min-[992px]:gap-x-8" key={cartProduct.productId}>
                        <div className="pb-[12px] flex flex-col items-center bg-white">
                          <Image
                            src={cartProduct?.image}
                            alt=""
                            width="150"
                            height="150"
                          />
                          <button
                            type="button"
                            className="w-7 h-7 flex justify-center items-center rounded-md bg-gray-300 rmv-from-cart-btn mt-3"
                          >
                            <span className="btn-square-icon cursor-pointer" onClick={()=>handleRemoveItem(cartProduct)}>
                              <RiDeleteBin6Fill/>
                            </span>
                          </button>
                        </div>

                        <div className="cart-item-info">
                          <h6 className="text-lg font-semibold text-light-blue">
                            {cartProduct.name}
                          </h6>
                          <div className="qty mt-3 mb-[6px] flex">
                            <span className="text-light-blue qty-text mr-[10px]">
                              Qty:
                            </span>
                            <div className="qty-change flex items-center">
                              <button
                                type="button"
                                className="border w-8 h-8 border-[rgba(0,0,0,0.1)] transition-all hover:border-[rgba(0,0,0,0.3)] flex justify-center items-center bg-slate-100"
                                onClick={()=> handleUpdateQuantity(cartProduct, "minus")}
                              >
                                <FaMinus/>
                              </button>
                              <span className="font-semibold flex justify-center w-10">
                                {cartProduct.quantity}
                              </span>
                              <button
                                type="button"
                                className="text-light-blue w-8 h-8 border border-[rgba(0,0,0,0.1)] transition-all hover:border-[rgba(0,0,0,0.3)] flex justify-center items-center bg-slate-100"
                                onClick={()=> handleUpdateQuantity(cartProduct, "plus")}
                              >
                               <FaPlus/>
                              </button>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row justify-between pr-3">
                            <div className="text-pine-green fw-4 fs-15 price">
                              Price : ${cartProduct.price}
                            </div>
                            <div className="sub-total py-[6px] font-semibold text-lg text-regal-blue">
                              <span>Sub Total: $</span>
                              <span className="">
                                {cartProduct.price*cartProduct.quantity}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button
                    type="button"
                    className="bg-red-400 px-3 py-1 rounded-md text-white hover:bg-red-500 transition-all mt-3"
                    onClick={() => dispatchCart({type: 'CLEAR_CART'})}
                  >
                    <span className="fs-16">Clear Cart</span>
                  </button>
                </div>
                <div className="cart-right my-6 bg-slate-100">
                  <div className="cart-summary text-gray-600 flex flex-col min-h-[420px] p-4 text-light-blue">
                    <div className="text-lg font-semibold border-b border-b-slate-500 pb-3">
                      <h6 className="fs-20 fw-5">Order Summary</h6>
                    </div>
                    <ul className="cart-summary-info py-4">
                      <li className="flex justify-between my-[6px]">
                        <span className="fw-4">
                          Selected items(s) Price
                        </span>
                        <span className="fw-7">{totalPrice}$</span>
                      </li>
                      <li className="flex justify-between my-[6px]">
                        <span className="fw-4">Discount</span>
                        <span className="fw-7">
                          <span className="fw-5 text-red">-&nbsp;</span>
                          00$
                        </span>
                      </li>
                      <li className="flex justify-between my-[6px]">
                        <span className="fw-4">Delivery Cost</span>
                        <span className="fw-7">
                          <span className="fw-5 text-gold">+&nbsp;</span>
                            10$
                        </span>
                      </li>
                    </ul>
                    <div className="cart-summary-total mt-auto mb-4 pt-3 border-t border-t-slate-600 flex justify-between text-lg font-semibold">
                      <span className="fw-6">Grand Total:</span>
                      <span className="fw-6">
                      {totalPrice+10}$
                      </span>
                    </div>
                    <div className="cart-summary-btn">
                      <Link href="/checkout" type="button" className="w-full text-white font-semibold bg-slate-600 hover:bg-slate-700 p-2 flex justify-center">
                        Proceed to Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
