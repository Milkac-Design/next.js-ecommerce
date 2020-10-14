import { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
// import { products } from '../utils/database';
import nextCookies from 'next-cookies';
import AddToCart from '../components/AddToCart';

export default function Display(props) {
  const product = props.products.find((currentProduct) => {
    if (currentProduct.id.toString() === props.id) {
      return true;
    }
    return false;
  });

  const setCart = useState(props.addedToy);

  return (
    <>
      <Layout cart={props.addedToy}>
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

export async function getServerSideProps(context) {
  const { getProducts } = await import('../utils/serverDatabase');
  const products = await getProducts();
  const allCookies = nextCookies(context);
  const addedToy = allCookies.cart || [];

  console.log(products);
  return {
    props: {
      id: context.query.display,
      addedToy: addedToy,
      products: products,
    },
  };
}
