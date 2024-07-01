import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8084", //env로 dev,rod분리해줘야
  headers: {
    "Content-Type": "application/json",

    Authorization: `Bearer 기존값`,
  },
  withCredentials: true,
});

export default api;
