import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { auth } from "./firebase";
import { BasketContext } from "./components/Context/BasketContext";

function App() {
  const { user, addUser } = useContext(BasketContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // User logged in
        addUser(authUser);
      } else {
        // User logged out
        addUser(null);
      }
    });
    return () => {
      // clean up tasks
      unsubscribe();
    };
  }, []);

  console.log("User >>", user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
