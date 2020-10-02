import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Pop-Tacular</title>
        </Head>

        <main>
          <div className="mainPageStyle">
            <h1>Pop-Tacular E-Shop</h1>
            <img src="/funko_pop_banner.jpg" alt="funko pop banner" />
            <Link href="/products">
              <a>CHECK OUT THE STORE</a>
            </Link>
            <div className="footerBuffer"></div>
          </div>
        </main>
      </Layout>
    </>
  );
}
