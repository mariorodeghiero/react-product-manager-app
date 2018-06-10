import React, { Component } from "react";

import { Route, Link } from "react-router-dom";

import ProductsHome from "./ProductHome";
import Category from "./Category";

class Product extends Component {
  state = {};
  render() {
    const { match } = this.props;
    return (
      <div className="row">
        <div className="col-md-2">
          <h3>Categories</h3>
          <Link to="/products/category/1">Category 1</Link>
        </div>
        <div className="col-md-10">
          <h1>Products</h1>
          <Route exact path={match.url} component={ProductsHome} />
          <Route path={match.url + "/category/:catId"} component={Category} />
        </div>
      </div>
    );
  }
}

export default Product;
