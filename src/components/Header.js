import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { BasketContext } from "./Context/BasketContext";
import { auth } from "../firebase";

function Header() {
  const { basket, user } = useContext(BasketContext);

  const checkUserLoggedIn = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        ></img>
      </Link>

      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">
        <Link to={!user && "/login"} className="header__link">
          <div onClick={checkUserLoggedIn} className="header__option">
            <span className="header__optionLineOne">
              Hello {user ? user.email : ""}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>

      {/* basket icon with number */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* shopping basket icon */}
          <ShoppingBasketIcon />
          {/* number of items in the basket */}
          <span className="header__optionLineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;
