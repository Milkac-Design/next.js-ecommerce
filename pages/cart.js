import Head from 'next/head';
import Layout from '../components/Layout';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import CartFunction from '../components/CartFunction';
import Link from 'next/link';

export default function Cart(props) {
  const [cart, setCart] = useState(props.cartFromCookies);
  const products = props.products;

  return (
    <>
      <Layout cart={cart}>
        <Head>
          <title>Cart</title>
        </Head>
        <div className="cartLayoutStyle">
          <div className="cartInnerStyle">
            <div>
              <h1>Your Cart</h1>
            </div>
            <CartFunction products={products} cart={cart} setCart={setCart} />
            <Link href={'/checkout'}>
              <a data-cy='checkout-button'>GO TO CHECKOUT</a>
            </Link>
          </div>
        </div>
        <div className="footerBuffer"></div>
      </Layout>
    </>
  );
}
export async function getServerSideProps(context) {
  const { getProducts } = await import('../utils/serverDatabase');
  const products = await getProducts();
  const allCookies = nextCookies(context);
  const cartFromCookies = allCookies.cart || [];

  return {
    props: {
      cartFromCookies: cartFromCookies,
      products: products,
    },
  };
}
