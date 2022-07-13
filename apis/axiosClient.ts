import axios from "axios";
import config from "../config";

const AXIOS = axios.create({
  baseURL: config.baseUrl,
  timeout: 120000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AXIOS;
