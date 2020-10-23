import Head from 'next/head';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import nextCookies from 'next-cookies';


export default function Checkout(props) {

  const products = props.products;
  const cart = props.cartFromCookies;
  console.log(cart);
  function calculateTotal(cartForTotal) {
    const total = cartForTotal.reduce((acc, curr) => {
      return (
        acc +
        curr.amount *
        products.filter((product) => product.id === curr.id)[0].price
      );
    }, 0);
    return total;
  }


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      shipping: '',
      card: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      shipping: Yup.string().min(10, 'Invalid address').required('Required'),
      card: Yup.number().min(123456789012, 'Invalid card number').required('Required'),
    }),
    onSubmit: (values) => {
      alert('Your purchase has been submited');
      redirect();
    },
  });
  function redirect() {
    window.location.href = "thankyou";
    return false;
  }

  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>
      <div className='checkoutPageStyle'>
        <div className='checkoutLayoutStyle'>
          <form className='checkoutFormStyle' onSubmit={formik.handleSubmit}>
            <p>Total Purchase: {calculateTotal(cart)}€</p>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
            <label htmlFor="shipping">Shipping Address</label>
            <input
              id="shipping"
              name="shipping"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.shipping}
            />
            {formik.touched.shipping && formik.errors.shipping ? (
              <div>{formik.errors.shipping}</div>
            ) : null}
            <label htmlFor="card">Card Number</label>
            <input
              id="card"
              name="card"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.card}
            />
            {formik.touched.card && formik.errors.card ? (
              <div>{formik.errors.card}</div>
            ) : null}
            <button data-cy='buy-now' type="submit" >BUY NOW</button>
          </form>
        </div>
      </div>
      <div className="footerBuffer"></div>
    </Layout>
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