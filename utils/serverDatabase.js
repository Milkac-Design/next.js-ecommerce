import setPostgresDefaultsOnHeroku from './setPostgressOnHeroku'
import postgres from 'postgres';
import dotenv from 'dotenv';
import camelcaseKeys from 'camelcase-keys';

setPostgresDefaultsOnHeroku();
dotenv.config();
const sql = postgres();

export async function getProducts() {
  const products = await sql`SELECT * from products`;
  return products.map(camelcaseKeys);
}
