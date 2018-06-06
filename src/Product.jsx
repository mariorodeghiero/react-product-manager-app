import React, { Component } from "react";

import { Route } from "react-router-dom";

import ProductsHome from "./ProductHome";

class Product extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-2">
          <h3>Categories</h3>
          Link to products
        </div>
        <div className="col-md-10">
          <h1>Products</h1>
          <Route exact path={this.props.match.url} component={ProductsHome} />
        </div>
      </div>
    );
  }
}

export default Product;
