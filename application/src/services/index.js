import axios from "axios";

const instance = axios.create({
  baseURL: "http://api.additivasia.io/api/v1/assignment/employees/",
});

export default instance;
