import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import ProductsHome from "./ProductHome";
import ProductsNew from "./ProductsNew";
import Category from "./Category";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingCategory: ""
    };

    this.renderCategory = this.renderCategory.bind(this);
    this.handleNewCategory = this.handleNewCategory.bind(this);
    this.editeCategory = this.editeCategory.bind(this);
    this.cancelEdite = this.cancelEdite.bind(this);
    this.handleEditCategory = this.handleEditCategory.bind(this);
  }

  componentDidMount(props) {
    this.props.loadCategories();
  }

  editeCategory(cat) {
    this.setState({ editingCategory: cat.id });
  }
  cancelEdite(cat) {
    this.setState({ editingCategory: "" });
  }

  renderCategory(cat, index) {
    return (
      <li key={cat.id}>
        {this.state.editingCategory === cat.id && (
          <div className="input-group">
            <div className="input-group-btn">
              <input
                ref={"cat-" + cat.id}
                onKeyUp={this.handleEditCategory}
                className="form-control"
                type="text"
                defaultValue={cat.category}
              />
              <button className="btn" onClick={this.cancelEdite}>
                cancel
              </button>
            </div>
          </div>
        )}
        {this.state.editingCategory !== cat.id && (
          <div>
            <Link to={`/products/category/${cat.id}`}>{cat.category}</Link>
            <button
              onClick={() => this.props.removeCategory(cat)}
              type="button"
              className="close"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <button
              onClick={() => this.editeCategory(cat)}
              type="button"
              className="btn btn-sm pl-3*5"
              aria-label="right Align"
            >
              <span className="glyphicon glyphicon-pencil" aria-hidden="true" />
            </button>
          </div>
        )}
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

  handleEditCategory(key) {
    if (key.keyCode === 13) {
      this.props.editeCategory({
        id: this.state.editingCategory,
        category: this.refs["cat-" + this.state.editingCategory].value
      });
      this.setState({ editingCategory: "" });
    }
  }

  render() {
    const { match, categories } = this.props;
    // const { categories } = this.state;
    return (
      <div className="row">
        <div className="col-md-2">
          <h3>Categories</h3>
          <ul
            style={{
              listStyle: "none",
              padding: 0
            }}
          >
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
          <Link to="/products/novo">New Product</Link>
        </div>
        <div className="col-md-10">
          <h1>Products</h1>
          <Route exact path={match.url} component={ProductsHome} />
          <Route
            exact
            path={match.url + "/novo"}
            render={props => {
              return (
                <ProductsNew
                  {...props}
                  categories={categories}
                  createProduct={this.props.createProduct}
                />
              );
            }}
          />
          <Route
            path={match.url + "/category/:catId"}
            render={props => {
              return (
                <Category
                  {...props}
                  products={this.props.products}
                  loadProducts={this.props.loadProducts}
                />
              );
            }}
          />
        </div>
      </div>
    );
  }
}

export default Product;
