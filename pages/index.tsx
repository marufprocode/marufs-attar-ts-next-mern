// import { Inter } from '@next/font/google'
// import styles from '../styles/Home.module.css'

import ProductSection from "../components/ProductSection";
import Layout from "../layout/Layout";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="Home">
      <ProductSection/>
    </Layout>
  )
}
