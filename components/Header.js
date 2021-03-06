import Link from 'next/link';
import {
  calculateTotalItemsInCart,
  getCartFromCookies,
} from '../utils/cookies';

export default function Header() {
  const cart = getCartFromCookies();
  return (
    <header className="headerStyle">
      <img className="logoStyle" src="/logo_wite.png" alt="logo" />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/cart">
          <a data-cy='shopping-cart'>
            <img
              className="shoppingCartStyle"
              src="/shopping_cart.png"
              alt="shopping cart"
            />
            <span>{calculateTotalItemsInCart(cart)}</span>
          </a>
        </Link>
        <Link href="/checkout">
          <a>Checkout</a>
        </Link>
      </nav>
    </header>
  );
}
