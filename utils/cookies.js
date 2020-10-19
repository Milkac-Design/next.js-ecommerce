import cookie from 'js-cookie';

export function getCartFromCookies() {
  const cart = cookie.getJSON('cart') || [];
  return cart;
}

export function addAmountToCartInCookie(id, quantity) {

  const cart = getCartFromCookies();
  let newCart;

  if (cart.length !== 0 && cart.find((item) => item.id === id)) {

    newCart = cart.map((item) =>
      item.id !== id ? item : { ...item, amount: (item.amount += quantity) },
    );
  } else if (cart.length !== 0) {
    newCart = [...cart];
    newCart.push({ id: id, amount: quantity });
  } else {
    newCart = [{ id: id, amount: quantity }];
  }
  cookie.set('cart', newCart);
  return newCart;
}

export function updateAmountInCartInCookie(id, quantity) {

  const cart = getCartFromCookies();
  let newCart;

  if (cart.length !== 0 && cart.find((item) => item.id === id)) {

    newCart = cart.map((item) =>
      item.id !== id ? item : { ...item, amount: parseInt(quantity) },
    );
  } else if (cart.length !== 0) {
    newCart = [...cart];
    newCart.push({ id: id, amount: quantity });
  } else {
    newCart = [{ id: id, amount: quantity }];
  }


  cookie.set('cart', newCart);
  return newCart;
}

export function removeItemFromCartInCookie(id) {
  const cart = getCartFromCookies();
  let newCart;


  if (cart.length !== 0) {
    newCart = cart.filter((item) => item.id !== id);
  } else {
    newCart = cart;
  }
  cookie.set('cart', newCart);
  return newCart;
}

export function calculateTotalItemsInCart(cart) {
  if (!cart) {
    return 0;
  }
  const totalItems = cart.reduce((acc, curr) => {
    return acc + parseInt(curr.amount);
  }, 0);
  return totalItems;
}
