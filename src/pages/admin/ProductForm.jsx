import { useEffect, useState } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct} from "../../api/productsAPI";
import Header from "./Header";

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
    if (!name || !price || !quantity || !category || !image || !type) return alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");

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

      setProducts(prev =>
        prev.map(p => (p.id === id ? updated : p))
      );
    } else {
      const added = await addProduct(newProduct);

      setProducts(prev => [...prev, added]);
    }

    setName("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setImage("");
    setType("");
    setId(null);

    alert("Thêm thành công")
  };

  const handleUpdate = (p) => {
    setName(p.name);
    setPrice(p.price);
    setQuantity(p.quantity);
    setCategory(p.category);
    setImage(p.image);
    setId(p.id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa không?");
    if (!confirmDelete) return;

    await deleteProduct(id);
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <>
    <Header />
    <br />
    <br />
    <br />
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
      <br />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">-- Chọn kiểu --</option>
        <option value="new">New</option>
        <option value="normal">Normal</option>
        <option value="best-seller">Best seller</option>
      </select>
      
      <br />
      <br />
      <button onClick={handleSubmit}>{id ? "Cập nhật" : "Thêm"}</button>

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
            <th>Kiểu</th>
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
              <td>{p.type}</td>

              <td>
                <button onClick={() => handleUpdate(p)}>
                  Cập nhật
                </button>
                <button style={{marginLeft: "10px"}} onClick={() => handleDelete(p.id)}>
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