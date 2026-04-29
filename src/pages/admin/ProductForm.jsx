/* ProductForm.jsx */

import { useEffect, useState } from "react";
import {
  addProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../../api/productsAPI";

import Header from "./Header";

import "../../styles/adminTable.css";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [id, setId] = useState(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleSubmit = async () => {
    if (!name || !price || !quantity || !category || !image || !type) {
      return alert("Vui lòng nhập đầy đủ thông tin!");
    }

    if (isNaN(price)) {
      return alert("Giá phải là số!");
    }

    if (isNaN(quantity)) {
      return alert("Số lượng phải là số!");
    }

    const newProduct = {
      name,
      price: Number(price),
      quantity: Number(quantity),
      category,
      image,
      type,
    };

    if (id) {
      const updated = await updateProduct(id, newProduct);

      setProducts((prev) =>
        prev.map((p) => (p.id === id ? updated : p))
      );

      alert("Cập nhật thành công!");
    } else {
      const added = await addProduct(newProduct);

      setProducts((prev) => [...prev, added]);

      alert("Thêm sản phẩm thành công!");
    }

    setName("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setImage("");
    setType("");
    setId(null);
  };

  const handleUpdate = (p) => {
    setName(p.name);
    setPrice(p.price);
    setQuantity(p.quantity);
    setCategory(p.category);
    setImage(p.image);
    setType(p.type);
    setId(p.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa sản phẩm này không?"
    );

    if (!confirmDelete) return;

    await deleteProduct(id);

    setProducts((prev) => prev.filter((p) => p.id !== id));

    alert("Xóa thành công!");
  };

  return (
    <>
      <Header />

      <div className="product-manager">
        <div className="product-form">
          <h2 className="product-form-title">
            Quản lý sản phẩm
          </h2>

          <div className="product-form-grid">
            <input
              type="text"
              placeholder="Tên sản phẩm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Giá sản phẩm"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="text"
              placeholder="Số lượng"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">-- Chọn loại --</option>
              <option value="dulich">Du lịch</option>
              <option value="nam">Nam</option>
              <option value="tote">Tote</option>
              <option value="nu">Nữ</option>
            </select>

            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];

                if (!file) return;

                const reader = new FileReader();

                reader.onloadend = () => {
                  setImage(reader.result);
                };

                reader.readAsDataURL(file);
              }}
            />

            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">-- Chọn kiểu --</option>
              <option value="new">New</option>
              <option value="normal">Normal</option>
              <option value="best-seller">Best seller</option>
            </select>
          </div>

          <button
            className="product-btn product-btn-add"
            onClick={handleSubmit}
          >
            {id ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
          </button>
        </div>

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tên</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Loại</th>
              <th>Ảnh</th>
              <th>Kiểu</th>
              <th>Hành động</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>

                <td>{p.name}</td>

                <td>{p.price.toLocaleString()}₫</td>

                <td>{p.quantity}</td>

                <td>{p.category}</td>

                <td>
                  <img
                    src={p.image}
                    alt={p.name}
                    className="product-image"
                  />
                </td>

                <td>
                  <span className={`product-type ${p.type}`}>
                    {p.type}
                  </span>
                </td>

                <td>
                  <button
                    className="product-btn product-btn-edit"
                    onClick={() => handleUpdate(p)}
                  >
                    Cập nhật
                  </button>

                  <button
                    className="product-btn product-btn-delete"
                    onClick={() => handleDelete(p.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}