import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import axios from "axios";
import ProductsHome from "./ProductHome";
import Category from "./Category";
import Api from "./Api";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };

    this.renderCategory = this.renderCategory.bind(this);
    this.handleNewCategory = this.handleNewCategory.bind(this);
    this.loadCategories = this.loadCategories.bind(this);
  }

  loadCategories() {
    Api.loadCategories().then(resp => {
      this.setState({ categories: resp.data });
    });
  }

  componentDidMount(props) {
    this.loadCategories();
  }

  removeCategory(category) {
    Api.removeCatogories(category.id).then(resp => {
      this.loadCategories();
    });
  }

  renderCategory(cat, index) {
    return (
      <li key={cat.id}>
        <Link to={`/products/category/${cat.id}`}>{cat.category}</Link>
        <button
          onClick={() => this.removeCategory(cat)}
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
      axios
        .post("http://localhost:3001/categories", {
          category: this.refs.category.value
        })
        .then(resp => {
          this.refs.category.value = "";
          this.loadCategories();
        });
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
            {this.state.categories.map((cat, index) =>
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
