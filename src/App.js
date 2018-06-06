import React, { Component } from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-item nav-link active" href="/">
                  Products Manager<span class="sr-only">(current)</span>
                </a>
                <Link class="nav-item nav-link" to="/">
                  Home
                </Link>
                <Link class="nav-item nav-link" to="/product">
                  Products
                </Link>
                <Link class="nav-item nav-link disabled" to="/about">
                  About
                </Link>
              </div>
            </div>
          </nav>
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/product" component={Product} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
