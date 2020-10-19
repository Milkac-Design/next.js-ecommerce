import { useState } from 'react';
import { addAmountToCartInCookie } from '../utils/cookies.js';


export default function AddToCart(props) {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (e) => {
    setQuantity(e.target.value);
  };


  function handleAddtoCart(e) {

    const id = props.id;
    const quant = quantity;
    console.log(typeof id, id, quant);
    addAmountToCartInCookie(id, parseInt(quant));
    setQuantity('1');

  }

  return (
    <div>
      <form onSubmit={(e) => handleAddtoCart(e)}>
        <input
          type="number"
          min="1"
          placeholder="quantity"
          value={quantity}
          onChange={(e) => handleChange(e)}
        />
        <input className="addToCartButton" type="submit" value="Add to Cart" />
      </form>
    </div>
  );
}
