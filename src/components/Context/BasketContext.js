import React, { createContext, useState, useEffect } from "react";
import Subtotal from "../Subtotal";

export const BasketContext = createContext();

const BasketContextProvider = (props) => {
  const [basket, setBasket] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log(">> Basket updated! >>" + basket.length);
  }, [basket]);

  const addUser = (user) => {
    setUser(user);
  };

  const addToBasket = (newProduct) => {
    setBasket((prevProducts) => {
      return [...prevProducts, newProduct];
    });
  };

  const removeFromBasket = (productId) => {
    console.log(">> Inside BasketContext >> remove id ...", productId);
    let updatedBasket = [];
    updatedBasket = [...basket];

    let indexOfRemovedProd = updatedBasket.findIndex((prod) => {
      return prod.id === productId;
    });

    if (indexOfRemovedProd !== -1) {
      updatedBasket.splice(indexOfRemovedProd, 1);
    }
    setBasket(updatedBasket);
  };

  const getBasketSubtotal = (currBasket) => {
    return currBasket.reduce((acc, curr) => {
      return acc + curr.price;
    }, 0);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        getBasketSubtotal,
        user,
        addUser,
      }}
    >
      {props.children}
    </BasketContext.Provider>
  );
};

export default BasketContextProvider;
