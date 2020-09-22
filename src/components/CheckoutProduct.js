import React, { useContext } from "react";
import "./CheckoutProduct.css";
import { BasketContext } from "./Context/BasketContext";

const CheckoutProduct = (props) => {
  const { removeFromBasket } = useContext(BasketContext);

  const removeProdFromBasket = () => {
    console.log("removing item with id ...", props.id);
    removeFromBasket(props.id);
  };

  return (
    <div className="checkoutProduct">
      {" "}
      <img
        className="checkoutProduct__img"
        src={props.image}
        alt="checkoutProduct_image"
      />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
        <button onClick={removeProdFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
