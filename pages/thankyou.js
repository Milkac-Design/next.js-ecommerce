import Head from 'next/head';
import Layout from '../components/Layout';

export default function ThankYou() {

  return (
    <>
      <Layout>
        <Head>
          <title>Thank you</title>
        </Head>
        <main className='thankyouPageStyle'>
          <div className='thankyouTextStyle'>
            <h1>Thank You For shopping with us!</h1>
            <h2>-Stay Cool, stay Pop-Tacular-</h2>
          </div>
        </main>
      </Layout>
    </>
  );
}