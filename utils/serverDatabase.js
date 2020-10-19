import setPostgresDefaultsOnHeroku from './setPostgressOnHeroku'
import postgres from 'postgres';
import dotenv from 'dotenv';
import camelcaseKeys from 'camelcase-keys';

setPostgresDefaultsOnHeroku();
dotenv.config();
const sql =
  process.env.NODE_ENV === 'production'
    ? // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    postgres({ ssl: { rejectUnauthorized: false } })
    : postgres();

export async function getProducts() {
  const products = await sql`SELECT * from products`;
  return products.map(camelcaseKeys);
}
