import Head from 'next/head';
import Layout from '../components/Layout';

export default function Products() {
  return (
    <>
      <Layout>
        <Head>
          <title>Products</title>
        </Head>
        <div className="mainPageStyle">
          <h1>Products</h1>
        </div>
        <div className="productPageStyle">
          <div className="productRowsStyle">
            <div className="productBox">
              <img src="/groot1.png" alt="groot" />
              <div>
                <h3>Groot</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
            <div className="productBox">
              <img src="/captain_marvel1.png" alt="captain marvel" />
              <div>
                <h3>Captain Marvel</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
            <div className="productBox">
              <img src="/gambit1.png" alt="gambit" />
              <div>
                <h3>Gambit</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
          </div>
          <div className="productRowsStyle">
            <div className="productBox">
              <img src="/harley1.png" alt="harley" />
              <div>
                <h3>Harley Quinn</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
            <div className="productBox">
              <img src="/superman1.png" alt="superman" />
              <div>
                <h3>Superman</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
            <div className="productBox">
              <img src="/joker1.png" alt="joker" />
              <div>
                <h3>Joker</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
          </div>
          <div className="productRowsStyle">
            <div className="productBox">
              <img src="/spiderman1.png" alt="spiderman" />
              <div>
                <h3>Spider-Man</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
            <div className="productBox">
              <img src="/wonderwoman1.png" alt="wonderwoman" />
              <div>
                <h3>Wonder Woman</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
            <div className="productBox">
              <img src="/ironman1.png" alt="ironman" />
              <div>
                <h3>Ironman</h3>
              </div>
              <div>
                <p>Price: 15€</p>
              </div>
            </div>
          </div>
          <div className="footerBuffer"></div>
        </div>
      </Layout>
    </>
  );
}
