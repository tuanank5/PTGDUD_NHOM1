import { useEffect, useState } from "react";
import {
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct
} from "../api/productsApi";

import ProductList from "../components/ProductList.jsx";
import ProductForm from "../components/ProductForm.jsx";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editing, setEditing] = useState(null);

  const load = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (product) => {
    if (editing) {
      await updateProduct(editing.id, product);
      setEditing(null);
    } else {
      await addProduct(product);
    }
    load();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    load();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Quản lý sản phẩm</h2>

      <ProductForm onSubmit={handleSubmit} editing={editing} />

      <ProductList
        products={products}
        onDelete={handleDelete}
        onEdit={setEditing}
      />
    </div>
  );
}
//fix