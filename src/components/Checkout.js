import React, { useContext } from "react";
import { BasketContext } from "./Context/BasketContext";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = (props) => {
  const { basket } = useContext(BasketContext);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/15/Amazon_Fashion/Events/2020/HWN/XCM_CUTTLE_1248282_1304869_CA_HWN20_3283041_600x45_fr_CA._CB407781526_.jpg"
          alt="checkout_advt"
        />
        {basket && basket.length > 0 ? (
          <div className="checkout__products">
            {" "}
            <h2 className="checkout__title"> Your Current Basket</h2>
            {/* render the CheckoutProduct component */}
            {basket.map((product) => (
              <CheckoutProduct
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                rating={product.rating}
              />
            ))}
          </div>
        ) : (
          <div>
            {" "}
            <h2> Your Basket is empty</h2>
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
