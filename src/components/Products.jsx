import { useEffect, useState } from "react";
import { getProducts, addProduct, deleteProduct } from "../api/productsAPI";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [id, setId] = useState("");
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleAdd = async () => {
    if ( !name || !price || !image) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm");
      return;
    }

    await addProduct({
      // id,
      name,
      price: Number(price),
      image
    });

    setId("");
    setName("");
    setPrice("");
    setImage("");

    loadProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div>
      <div>
        <h2>Quản lý sản phẩm</h2>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Giá"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input type="file" onChange={handleImageChange} />
        <br />
        <button onClick={handleAdd}>Thêm sản phẩm</button>
      </div>

      <h2>Danh sách sản phẩm</h2>
      {products.map((p) => (
        <div key={p.id}>
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