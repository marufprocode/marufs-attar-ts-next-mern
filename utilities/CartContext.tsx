import React, { createContext, useReducer } from 'react';
import Cookies from 'js-cookie'


export const cartContext = createContext({});

const storedCart = Cookies.get('cart')

const initialState = {
    cart: storedCart ? JSON.parse(storedCart): {cartItems:[]} 
}


// type reducerAction = {type:string, value:{productId:string}}

function reducer (state:any, action:any) {
    switch(action.type){
        case 'ADD_TO_CART':{
            const newItem = action.payload;
            const existItem = state.cart.cartItems?.find((item: { productId: string; }) => item.productId === newItem.productId);
            const cartItems = existItem ? state.cart.cartItems?.map((item: { productId: string; }) => item.productId === existItem.productId ? newItem:item):[...state.cart.cartItems, newItem]
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}))
            return {...state, cart: {...state.cart, cartItems}}
        }
        case 'CLEAR_CART':{
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems:[]}))
            return {...state, cart:{...state.cart, cartItems:[]}}
        }
        case 'REMOVE_ITEM':{
            const cartItems = state.cart.cartItems.filter((item:{ productId: string; }) => item.productId !== action.payload.productId)
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}))
            return {...state, cart:{...state.cart, cartItems}}
        }
        case 'UPDATE_QTY':{
            const cartItems = state.cart.cartItems.map((item:{ productId: string; }) => item.productId === action.payload.productId ? action.payload: item)
            Cookies.set('cart', JSON.stringify({...state.cart, cartItems}))
            return {...state, cart:{...state.cart, cartItems}}
        }
        default: return state
    }
}

const CartContext = ({children}:any) => {
    const [cartState, dispatchCart] = useReducer(reducer, initialState)
    const info = {cartState, dispatchCart}
    return (
        <cartContext.Provider value={info}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContext;