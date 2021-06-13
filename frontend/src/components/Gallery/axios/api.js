import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5004/api",
  headers: {
    "Content-Type": "application/json",
  },
});
