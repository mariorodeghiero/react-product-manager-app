import React, { Component } from "react";
import axios from "axios";

class Category extends Component {
  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.state = {
      products: [],
      category: {}
    };
  }
  loadData(id) {
    this.props.loadProducts(id);
    // axios.get("http://localhost:3001/products?category=" + id).then(res => {
    // this.setState({ products: res.data }); });
    axios.get("http://localhost:3001/categories/" + id).then(res => {
      this.setState({ category: res.data });
    });
  }

  componentDidMount() {
    const id = this.props.match.params.catId;
    this.loadData(id);
  }

  componentWillReceiveProps(newProps) {
    this.loadData(newProps.match.params.catId);
    console.log(newProps.match.params.catId);
  }

  renderProduct(product) {
    return (
      <p key={product.id} className="card card-body bg-light">
        {product.product}
      </p>
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.category.category}</h1>{" "}
        <div>{this.props.products.map(this.renderProduct)}</div>
        {console.log(JSON.stringify(this.props.match))}{" "}
      </div>
    );
  }
}

export default Category;
