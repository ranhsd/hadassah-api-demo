import axios from "axios";

const client = axios.create({
    baseURL: "/V3/Northwind/Northwind.svc/",
    timeout: 5000,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
});

export default client;