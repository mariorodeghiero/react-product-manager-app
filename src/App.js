import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";

class App extends Component {
  constructor(props) {
    super(props);

    this.loadCategories = this.loadCategories.bind(this);
    this.removeCategory = this.removeCategory.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.editeCategory = this.editeCategory.bind(this);

    this.state = {
      categories: []
    };
  }
  loadCategories() {
    this.props.api.loadCategories().then(resp => {
      this.setState({ categories: resp.data });
    });
  }

  removeCategory(category) {
    this.props.api
      .removeCategories(category.id)
      .then(resp => this.loadCategories());
  }

  createCategory(category) {
    this.props.api.createCategory(category).then(resp => this.loadCategories());
  }
  editeCategory(category) {
    this.props.api.editeCategory(category).then(resp => this.loadCategories());
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-item nav-link active" href="/">
                  Products Manager<span className="sr-only">(current)</span>
                </a>
                <Link className="nav-item nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-item nav-link" to="/products">
                  Products
                </Link>
                <Link className="nav-item nav-link disabled" to="/about">
                  About
                </Link>
              </div>
            </div>
          </nav>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route
              path="/products"
              render={props => (
                <Product
                  {...props}
                  loadCategories={this.loadCategories}
                  removeCategory={this.removeCategory}
                  categories={this.state.categories}
                  createCategory={this.createCategory}
                  editeCategory={this.editeCategory}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
