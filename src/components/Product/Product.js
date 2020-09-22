import React, { useContext } from "react";
import "./Product.css";
import { BasketContext } from "../Context/BasketContext";

function Product(props) {
  const { addToBasket } = useContext(BasketContext);

  const addToBasketFunction = () => {
    const newProduct = {
      id: props.id,
      title: props.title,
      price: props.price,
      rating: props.rating,
      image: props.image,
    };

    addToBasket(newProduct);
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={props.image} alt="productImage"></img>
      <button onClick={addToBasketFunction}>Add to basket</button>
    </div>
  );
}

export default Product;
