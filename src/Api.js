import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/"
});

const apis = {
  loadCategories: () => api.get("categories"),
  removeCategories: id => api.delete("categories/" + id),
  createCategory: category => api.post("categories", category),
  editeCategory: category =>
    api.put("categories/" + category.id, (category = category))
};

export default apis;
