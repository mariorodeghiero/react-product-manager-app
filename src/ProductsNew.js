import React, { Component } from "react";

class ProductsNew extends Component {
  constructor(props) {
    super(props);
    this.handleNewProduct = this.handleNewProduct.bind(this);
  }

  handleNewProduct() {
    const product = {
      product: this.refs.product.value,
      category: this.refs.category.value
    };
    this.props.createProduct(product);
    console.log(product);
  }
  render() {
    const { categories } = this.props;
    return (
      <div>
        <h2>New Product</h2>
        <select ref="category">
          {categories.map(c => (
            <option value={c.id} key={c.category}>
              {c.category}
            </option>
          ))}
        </select>
        <input
          placeholder="Product name..."
          className="form-control"
          ref="product"
        />
        <button onClick={this.handleNewProduct}>Save</button>
      </div>
    );
  }
}

export default ProductsNew;
