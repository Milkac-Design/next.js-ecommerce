import Link from 'next/link';

export default function Header() {
  return (
    <header className="headerStyle">
      <img className="logoStyle" src="/logo.png" alt="logo" />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/">
          <a>Your Cart</a>
        </Link>
        <Link href="/asdf">
          <a>Checkout</a>
        </Link>
      </nav>
    </header>
  );
}
