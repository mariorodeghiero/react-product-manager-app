import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const apis = {
  readCategory: id => api.get("categories/" + id),
  loadCategories: () => api.get("categories"),
  removeCategories: id => api.delete("categories/" + id),
  createCategory: category => api.post("categories", category),
  editeCategory: category => api.put("categories/" + category.id, category),
  createProduct: product => api.post("products", product),
  loadProducts: category => api.get("products?category=" + category)
};

export default apis;
