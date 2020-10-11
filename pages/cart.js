import Head from 'next/head';
import Layout from '../components/Layout';
import nextCookies from 'next-cookies';
import { useState } from 'react';
import CartFunction from '../components/CartFunction';
import Link from 'next/link';

export default function Cart(props) {
  const [cart, setCart] = useState(props.cartFromCookies);
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
            <CartFunction cart={cart} setCart={setCart} />
            <Link href={'/checkout'}>
              <a>GO TO CHECKOUT</a>
            </Link>
          </div>
        </div>
        <div className="footerBuffer"></div>
      </Layout>
    </>
  );
}
export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const cartFromCookies = allCookies.cart || [];
  console.log(cartFromCookies);
  return {
    props: {
      cartFromCookies: cartFromCookies,
    },
  };
}
