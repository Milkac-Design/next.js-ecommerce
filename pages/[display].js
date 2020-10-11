import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { products } from '../utils/database';
import nextCookies from 'next-cookies';
import AddToCart from '../components/AddToCart';

export default function Display(props) {
  const product = products.find((currentProduct) => {
    if (currentProduct.id === props.id) {
      return true;
    }

    return false;
  });

  const [cart, setCart] = useState(props.addedToy);

  return (
    <>
      <Layout>
        <Head>
          <title>Product</title>
        </Head>
        <div className="displayLayoutStyle">
          <div className="displayProduct">
            <img
              className="originalProductStyle"
              src={product.photoOne}
              alt=""
            />
            <img
              className="swappedProductStyle"
              src={product.photoTwo}
              alt=""
            />
          </div>
          <div className="displayTextBoxStyle">
            <div>
              <p>{product.name}</p>
            </div>
            <div>
              <p>Price {product.price}€</p>
            </div>
            <AddToCart id={product.id} setCart={setCart} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export function getServerSideProps(context) {
  const allCookies = nextCookies(context);
  const addedToy = allCookies.cart || [];

  console.log(addedToy);
  return {
    props: { id: context.query.display, addedToy: addedToy },
  };
}
