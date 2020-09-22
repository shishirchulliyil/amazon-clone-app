import React, { useContext } from "react";
import CurrencyFormat from "react-currency-format";
import { BasketContext } from "./Context/BasketContext";
import "./Subtotal.css";

const Subtotal = (props) => {
  const { basket, getBasketSubtotal } = useContext(BasketContext);
  return (
    <div className="subtotal">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (items {basket.length}): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketSubtotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
