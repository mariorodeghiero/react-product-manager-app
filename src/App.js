import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
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
              <a class="nav-item nav-link active" href="#">
                Products Manager<span class="sr-only">(current)</span>
              </a>
              <a class="nav-item nav-link" href="#">
                Home
              </a>
              <a class="nav-item nav-link" href="#">
                Products
              </a>
              <a class="nav-item nav-link disabled" href="#">
                About
              </a>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default App;
