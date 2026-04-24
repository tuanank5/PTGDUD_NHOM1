import React, { useState, useEffect, useContext } from "react";
import { getProducts } from "../../api/productsAPI";
import "../../styles/ProductList/ProductCategory.css";
import { useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { FavoritesContext } from "../../context/FavoritesContext";

// PHẢI CÓ DÒNG NÀY ĐỂ ĐỊNH NGHĨA COMPONENT
export default function ProductCategory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  // State cho filter
  const [typeFilter, setTypeFilter] = useState({
    "best-seller": false,
    "new": false,
    "normal": false,
  });
  const [sortPrice, setSortPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Lấy category từ query string
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  // Lọc sản phẩm theo category
  let filteredProducts = category
    ? products.filter((item) => item.category === category)
    : products;

  // Lọc theo type
  const checkedTypes = Object.keys(typeFilter).filter((key) => typeFilter[key]);
  if (checkedTypes.length > 0) {
    filteredProducts = filteredProducts.filter((item) => checkedTypes.includes(item.type));
  }

  // Sắp xếp theo giá
  if (sortPrice === "asc") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortPrice === "desc") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  const handleTypeChange = (e) => {
    const { name, checked } = e.target;
    setTypeFilter((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSortChange = (e) => {
    setSortPrice(e.target.value);
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
  };

  if (loading) {
    return <div className="loading">Đang tải sản phẩm...</div>;
  }

  return (
    <div className="category-page">
      <div className="category-container">
        <aside className="filter-sidebar">
          <form onSubmit={handleFilterSubmit}>
            <div className="filter-section">
              <h3 className="filter-main-title">Lọc theo loại</h3>
              <div className="filter-group">
                <label>
                  <input
                    type="checkbox"
                    name="best-seller"
                    checked={typeFilter["best-seller"]}
                    onChange={handleTypeChange}
                  />
                  Best-seller
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="new"
                    checked={typeFilter["new"]}
                    onChange={handleTypeChange}
                  />
                  New
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="normal"
                    checked={typeFilter["normal"]}
                    onChange={handleTypeChange}
                  />
                  Normal
                </label>
              </div>
            </div>
            <div className="filter-section">
              <h3 className="filter-main-title">Sắp xếp theo giá</h3>
              <select value={sortPrice} onChange={handleSortChange}>
                <option value="">-- Chọn --</option>
                <option value="asc">Giá tăng dần</option>
                <option value="desc">Giá giảm dần</option>
              </select>
            </div>
            <button className="btn-apply-filter" type="submit">Lọc</button>
          </form>
        </aside>

        <main className="product-content">
          <h2 className="page-title">Danh Mục Sản Phẩm</h2>
          <div className="product-grid-category">
            {filteredProducts.map((item) => (
              <div className="product-card-luxury" key={item.id}>
                <div className="product-img-box">
                  <div className="badge-new">{item.type}</div>
                  <img src={item.image} alt={item.name} />
                  <button
                    className={`heart-btn ${favorites.some(f => f.id === item.id) ? "active" : ""}`}
                    onClick={() => toggleFavorite(item)}
                  >
                    {favorites.some(f => f.id === item.id) ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="product-info-box">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-quantity">Số lượng : {item.quantity}</p>
                  <p className="product-price">{item.price?.toLocaleString()} VND</p>
                  <button
                    className="btn-add-to-cart"
                    onClick={() => addToCart(item)}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}