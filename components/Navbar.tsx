import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaCartPlus } from 'react-icons/fa';
import { cartContext } from "../utilities/CartContext";


const Navbar = () => {
    const {cartState}:any = useContext(cartContext);
    const [itemCount, setItemCount] = useState(null);

    useEffect(()=> {
      setItemCount(cartState?.cart?.cartItems?.reduce((a: any,c: { quantity: number; })=> a+c.quantity, 0))
    },[cartState?.cart?.cartItems])

  return (
    <nav className="flex items-center h-12 px-6 py-8 justify-between shadow-md">
      {/* Brand Icon Left */}
      <Link href="/">
        <span className="text-lg font-bold">Maruf's Attar</span>
      </Link>
      {/* NavItems List */}
      <div className="flex items-center">
        <Link href="/cart" className="px-3 py-2 relative">
          <button className="flex items-center">
          <FaCartPlus className="w-5 h-5"/>
          <span className="absolute -top-1 right-0 font-bold">{itemCount}</span>
          </button>
        </Link>
        <Link href="/Login" className="px-3 py-2">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
