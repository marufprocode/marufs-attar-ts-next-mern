import React, { createContext, useReducer } from 'react';

export const cartContext = createContext({});

const initialState = {
    cart: {cartItems:[]}
}


// type reducerAction = {type:string, value:{productId:string}}

function reducer (state:any, action:any) {
    switch(action.type){
        case 'ADD_TO_CART':{
            const newItem = action.value;
            const existItem = state.cart.cartItems?.find((item: { productId: string; }) => item.productId === newItem.productId);
            const cartItems = existItem ? state.cart.cartItems?.map((item: { productId: string; }) => item.productId === existItem.productId ? newItem:item):[...state.cart.cartItems, newItem]
            return {...state, cart: {...state.cart, cartItems}}
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