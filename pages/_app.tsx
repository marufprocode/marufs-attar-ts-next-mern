import "../styles/globals.css";
import type { AppProps } from "next/app";
import CartContext from "../utilities/CartContext";
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContext>
      <Component {...pageProps} />
      <Toaster/>
    </CartContext>
  );
}
