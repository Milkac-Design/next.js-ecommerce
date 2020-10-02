import Head from 'next/head';
import Layout from '../components/Layout';

export default function Display() {
  return (
    <>
      <Layout>
        <Head>
          <title>Products</title>
        </Head>
        <div className="displayLayoutStyle">
          <div className="displayProduct">
            <img src="" alt="" />
          </div>
          <div className="displayTextBoxStyle">
            <div>
              <p>Name</p>
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
