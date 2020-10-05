import Head from 'next/head';
import Layout from '../components/Layout';
import { products } from '../utils/database';

export default function Display(props) {
  const product = products.find((currentProduct) => {
    if (currentProduct.id === props.id) {
      return true;
    }

    return false;
  });
  return (
    <>
      <Layout>
        <Head>
          <title>Product</title>
        </Head>
        <div className="displayLayoutStyle">
          <div className="displayProduct">
            <img className="singleProductStyle" src={product.photoOne} alt="" />
          </div>
          <div className="displayTextBoxStyle">
            <div>
              <p>{product.name}</p>
            </div>
            <div>
              <p>Price 15€</p>
            </div>
            <button>ADD TO CART</button>
          </div>
        </div>
      </Layout>
    </>
  );
}

export function getServerSideProps(context) {
  console.log(context);
  return {
    props: { id: context.query.display },
  };
}
