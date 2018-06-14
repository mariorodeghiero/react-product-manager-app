import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const apis = {
  loadCategories: () => api.get("categories"),
  removeCatogories: id => api.delete("categories/" + id)
};

export default apis;
