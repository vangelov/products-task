import { delay } from '../../utils/delay';

const PRODUCTS = [
  { name: 'p1', price: 20, currency: 'USD' },
  { name: 'p2', price: 100, currency: 'BGN' }
];

export async function getProducts() {
  await delay(1000);
  return PRODUCTS;
}
