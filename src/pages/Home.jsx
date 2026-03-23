import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductList from "../components/ProductList";
import ProductForm from "../components/ProductForm";
import { getProducts } from "../api/productsAPI";

export default function Home() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const handleAdd = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <Header />
      <Menu />

      <button onClick={() => navigate("/login")}>
        Login
      </button>

      {/* FORM */}
      <ProductForm onAdd={handleAdd} />

      {/* LIST */}
      <ProductList products={products} />
    </div>
  );
}