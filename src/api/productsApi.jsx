const API_URL = "http://localhost:3001/products";

// lấy danh sách
export const getProducts = async () => {
  const res = await fetch(API_URL);
  return res.json();
};

// thêm sản phẩm
export const addProduct = async (product) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  });

  return res.json();
};

// xoá
export const deleteProduct = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
};