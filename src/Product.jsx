import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import axios from "axios";
import ProductsHome from "./ProductHome";
import Category from "./Category";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  componentDidMount(props) {
    axios.get("http://localhost:3001/categories").then(resp => {
      this.setState({ categories: resp.data });
    });
  }

  renderCategory(cat, index) {
    return (
      <li key={cat.id}>
        <Link to={`/products/category/${cat.id}`}>{cat.category}</Link>
      </li>
    );
  }
  render() {
    const { match } = this.props;
    // const { categories } = this.state;
    return (
      <div className="row">
        <div className="col-md-2">
          <h3>Categories</h3>
          <ul>
            {this.state.categories.map((cat, index) =>
              this.renderCategory(cat, index)
            )}
            {console.log(this.state.categories[0])}
          </ul>
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
