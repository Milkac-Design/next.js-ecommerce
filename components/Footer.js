import Link from 'next/link';

export default function Footer() {
  return (
    <header className="footerStyle">
      <img className="logoStyle" src="/logo_wite.png" alt="logo" />
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/products">
          <a>Products</a>
        </Link>
        <Link href="/checkout">
          <a>Checkout</a>
        </Link>
      </nav>
      <div className='codeBy'>
        <p>Code by Mario</p>
        <Link href='https://github.com/Milkac-Design'>
          <a target="_blank"> <img className='githubStyle' src='/github-logo.png' alt='' /></a>
        </Link></div>
    </header>
  );
}
