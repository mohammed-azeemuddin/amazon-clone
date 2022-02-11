import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51KRxLcSIXOpM78ObnTvUFT3B6SW8F02hw1wrlrRq74FEPtdKEcLgu1FspGYIDsYQTnuM0wfDNFgFX1Cs7gcWm4I600GwcVv8xC"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser);
      // the user just logged in / the user was logged in already
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/orders" element={[<Header />, <Orders />]}></Route>

          <Route path="/login" element={[<Login />]}></Route>

          <Route path="/checkout" element={[<Header />, <Checkout />]}></Route>

          <Route
            path="/payment"
            element={[
              <Header />,
              <Elements stripe={promise}>
                <Payment />
              </Elements>,
            ]}
          ></Route>

          <Route path="/" element={[<Header />, <Home />]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
