import { useEffect, useState } from "react";
import { getProducts, addProduct, deleteProduct } from "../api/productsApi";

export default function Products() {
  const [products, setProducts] = useState([]);

  // form state
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  // xử lý chọn file ảnh
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result); // base64
    };

    reader.readAsDataURL(file);
  };

  // thêm sản phẩm
  const handleAdd = async () => {
    if (!name || !price || !image) {
      alert("Vui lòng nhập đầy đủ");
      return;
    }

    await addProduct({
      name,
      price: Number(price),
      image
    });

    // reset form
    setName("");
    setPrice("");
    setImage("");

    loadProducts();
  };

  // xoá
  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>

      {/* FORM */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Giá"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input type="file" onChange={handleImageChange} />

        <button onClick={handleAdd}>Thêm sản phẩm</button>
      </div>

      {/* LIST */}
      {products.map((p) => (
        <div key={p.id} style={{ margin: "10px 0" }}>
          <h3>{p.name}</h3>
          <p>{p.price}k</p>
          <img src={p.image} width="150" />
          <br />
          <button onClick={() => handleDelete(p.id)}>Xoá</button>
        </div>
      ))}
    </div>
  );
}