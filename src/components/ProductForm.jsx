import { useState } from "react";

export default function ProductForm({ onAdd }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    if (!name || !price || !image) return alert("Nhập đầy đủ");

    onAdd({
      id: Date.now(),
      name,
      price: Number(price),
      image
    });

    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <input placeholder="Tên" onChange={e => setName(e.target.value)} />
      <input placeholder="Giá" onChange={e => setPrice(e.target.value)} />
      <input placeholder="Link ảnh" onChange={e => setImage(e.target.value)} />

      <button onClick={handleSubmit}>Thêm</button>
    </div>
  );
}