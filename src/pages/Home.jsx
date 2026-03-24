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

  return (
    <div>
      <Header />
      <Menu />

      <button onClick={() => navigate("/login")}>
        Login
      </button>

      <button onClick={() => navigate("/productForm")}>
        Quản lý sản phẩm
      </button>

      {/* LIST */}
      <ProductList products={products} />
    </div>
  );
}
//fix