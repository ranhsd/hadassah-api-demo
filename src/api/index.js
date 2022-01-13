import axios from "axios";

const client = axios.create({
  baseURL: "/V3/Northwind/Northwind.svc/",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  }
});

export async function getCustomers(params = {}) {
  const { data } = await client.get("Customers", {
    params
  });

  return data?.value;
}

export async function getOrderDetails(orderId, params = {}) {
  const key = buildDetailsKey("Orders", {
    OrderID: orderId
  });

  const { data } = await client.get(key, { params });

  return data;
}

export async function getAll(entityName, params = {}) {
  const { data } = await client.get(entityName, {
    params
  });
  return data?.value;
}

const buildDetailsKey = (entitysetName, keys) => {
  let key = `${entitysetName}(`;

  Object.entries(keys).forEach(([k, v], index) => {
    key = `${key}${k}=${v}`;

    if (index < Object.entries(keys).length - 1) {
      key = `${key},`;
    }
  });

  key = `${key})`;
  return key;
};
