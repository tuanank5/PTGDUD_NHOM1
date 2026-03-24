import { useEffect, useState } from "react";
import { getProducts, addProduct } from "../api/productsAPI";

export default function ProductForm() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);
  
  const handleSubmit = async () => {
    if (!name || !price || !quantity || !category || !image) return alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");

    const newProduct = {
      name,
      price: Number(price),
      quantity: Number(quantity),
      category,
      image,
    };

    await addProduct(newProduct);

    setName("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setImage("");
  };

  const handleEdit = (p) => {
    setName(p.name);
    setPrice(p.price);
    setQuantity(p.quantity);
    setCategory(p.category);
    setImage(p.image);
    setEditingId(p.id);
  };

  const handleDelete = async () => {

  }

  return (
    <div style={{ padding: 20 }}>
      <input 
        type="text" 
        placeholder="Tên" 
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Giá" 
        value={price}
        onChange={(e) => setPrice(e.target.value)} 
      />
      <br />
      <input 
        type="text" 
        placeholder="Số lượng" 
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)} 
      />
      <br />
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
      <br />
      <input 
        type="file" 
        accept="image/*"
        value={image}
        onChange={(e) => {
          const file = e.target.files[0];
          if (!file) return;

          const reader = new FileReader();

          reader.onloadend = () => {
            setImage(reader.result); // base64
          };

          reader.readAsDataURL(file);
        }}
      />
      <br />
      <br />
      <button onClick={handleSubmit}>Thêm</button>

      <hr />
      <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Loại</th>
            <th>Ảnh</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>{p.quantity}</td>
              <td>{p.category}</td>
              <td>
                <img src={p.image} alt="" width="60" />
              </td>
              
              <td>
                <button onClick={(p.id) => {}}>
                  Cập nhật
                </button>
                <button style={{marginLeft: "10px"}} onClick={() => {}}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}