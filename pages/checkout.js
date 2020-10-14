import Head from 'next/head';
import Layout from '../components/Layout';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Checkout() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      shipping: '',
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
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <Head>
        <title>Checkout</title>
      </Head>
      <div>
        <form onSubmit={formik.handleSubmit}>
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
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="footerBuffer"></div>
    </Layout>
  );
}
