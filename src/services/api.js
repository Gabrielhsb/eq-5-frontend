import axios from "axios";

const api = axios.create({
  baseURL: "https://camp-recon-api.herokuapp.com"
});

export default api;