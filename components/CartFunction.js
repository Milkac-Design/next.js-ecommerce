import { removeItemFromCartInCookie } from '../utils/cookies';
import { updateAmountInCartInCookie } from '../utils/cookies';
import { getCartFromCookies } from '../utils/cookies';
// import { products } from '../utils/database';

export default function CartFunction({ products, cart, setCart }) {
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

  if (cart.length > 0) {
    return (
      <div className="cartBoxStyle">
        <div>
          {cart.map((item) => {
            return (
              <div className="cartItemStyle" key={item.id}>
                <div className="listItemStyle">
                  <img
                    alt=""
                    src={
                      products.filter((product) => product.id === item.id)[0]
                        .photoOne
                    }
                  />
                  <div>
                    Name:{' '}
                    {
                      products.filter((product) => product.id === item.id)[0]
                        .name
                    }
                  </div>

                  <div>
                    Quantity:{' '}
                    <input
                      type="number"
                      min="1"
                      value={item.amount}
                      onChange={(e) => {
                        updateAmountInCartInCookie(item.id, e.target.value);
                        setCart(getCartFromCookies());
                      }}
                    ></input>
                    <button
                      onClick={() => {
                        removeItemFromCartInCookie(item.id);
                        setCart(getCartFromCookies());
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="secondListItemStyle">
                  <div>
                    Price:{' '}
                    {
                      products.filter((product) => product.id === item.id)[0]
                        .price
                    }{' '}
                    €
                  </div>
                  <div>
                    Subtotal:{' '}
                    {item.amount *
                      parseInt(
                        products.filter((product) => product.id === item.id)[0]
                          .price,
                      )}{' '}
                    €
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div>
          <div className="cartTotalStyle">Total: {calculateTotal(cart)} €</div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div>Your Cart is empty</div>
      </>
    );
  }
}
// export async function getServerSideProps() {
//   const { getProducts } = await import('../utils/serverDatabase');
//   const products = await getProducts();
//   return {
//     props: { products: products },
//   };
// }
