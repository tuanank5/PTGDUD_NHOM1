const API_URL = "http://localhost:4000/orders";

export const getOrders = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

export const getOrdersByUser = async (userId) => {
  const res = await fetch(`${API_URL}?userId=${userId}`);
  return res.json();
};

export const createOrder = async (order) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  return res.json();
};

export const updateOrder = async (id, order) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  });
  return res.json();
};

export const deleteOrder = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};