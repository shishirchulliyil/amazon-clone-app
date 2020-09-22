import React from "react";
import "./Home.css";
import Product from "./Product/Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      ></img>
      <div className="home__row">
        {/* products */}
        <Product
          id="1"
          title="one"
          price={8.4}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SY400_.jpg"
        />
        <Product
          id="2"
          title="two"
          price={16.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        {/* products */}
        <Product
          id="3"
          title="three"
          price={11.33}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SY400_.jpg"
        />
        <Product
          id="4"
          title="four"
          price={14.86}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SY400_.jpg"
        />
        <Product
          id="5"
          title="five"
          price={10.76}
          rating={2}
          image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        {/* products */}
        <Product
          id="6"
          title="six"
          price={12.5}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81zKwg8kQ0L._AC_SY400_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
