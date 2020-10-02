import Link from 'next/link';

export default function Footer() {
  return (
    <header className="footerStyle">
      <img className="logoStyle" src="/logo.png" alt="logo" />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/">
          <a>Checkout</a>
        </Link>
      </nav>
      <p>Coded by Mario</p>
    </header>
  );
}
