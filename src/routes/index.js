import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "../components/ProductListing";
import Header from "../components/Navbar";
import ProductDetails from "../components/ProductDetails";

export const RouterView = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Page Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
};
