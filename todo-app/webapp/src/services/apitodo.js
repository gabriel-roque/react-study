import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3333/v1/api/"
});
