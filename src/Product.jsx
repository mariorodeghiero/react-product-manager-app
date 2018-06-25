import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import ProductsHome from "./ProductHome";
import Category from "./Category";

class Product extends Component {
  constructor(props) {
    super(props);

    this.renderCategory = this.renderCategory.bind(this);
    this.handleNewCategory = this.handleNewCategory.bind(this);
  }

  componentDidMount(props) {
    this.props.loadCategories();
  }

  renderCategory(cat, index) {
    return (
      <li key={cat.id}>
        <Link to={`/products/category/${cat.id}`}>{cat.category}</Link>
        <button
          onClick={() => this.props.removeCategory(cat)}
          type="button"
          className="close"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </li>
    );
  }

  handleNewCategory(key) {
    if (key.keyCode === 13) {
      console.log("true");
      this.props.createCategory({ category: this.refs.category.value });
      this.refs.category.value = "";
    }
  }

  render() {
    const { match } = this.props;
    // const { categories } = this.state;
    return (
      <div className="row">
        <div className="col-md-2">
          <h3>Categories</h3>
          <ul>
            {this.props.categories.map((cat, index) =>
              this.renderCategory(cat, index)
            )}
          </ul>
          <div className="card card-body bg-light">
            <input
              className="form-control"
              onKeyUp={this.handleNewCategory}
              type="text"
              ref="category"
              placeholder="new category"
            />
          </div>
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
