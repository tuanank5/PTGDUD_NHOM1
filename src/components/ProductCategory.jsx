import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getProducts } from "../api/productsAPI";
import { useCart } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import "../styles/ProductCategory.css";

export default function ProductCategory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const { addToCart } = useCart();
  const { favorites, toggleFavorite } = useContext(FavoritesContext);

  const [typeFilter, setTypeFilter] = useState({ "best-seller": false, new: false, normal: false });
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

  const queryParams = new URLSearchParams(location.search);
  const searchKeyword = queryParams.get("search")?.toLowerCase() || "";
  const category = queryParams.get("category");

  let displayProducts = products.filter((item) => {
    // 1. Lọc theo tìm kiếm
    const matchesSearch = item.name.toLowerCase().includes(searchKeyword);
    // 2. Lọc theo danh mục (nếu có)
    const matchesCategory = category ? item.category === category : true;
    // 3. Lọc theo checkbox loại
    const checkedTypes = Object.keys(typeFilter).filter((key) => typeFilter[key]);
    const matchesType = checkedTypes.length > 0 ? checkedTypes.includes(item.type) : true;

    return matchesSearch && matchesCategory && matchesType;
  });

  // 4. Sắp xếp giá
  if (sortPrice === "asc") {
    displayProducts = [...displayProducts].sort((a, b) => a.price - b.price);
  } else if (sortPrice === "desc") {
    displayProducts = [...displayProducts].sort((a, b) => b.price - a.price);
  }

  const handleTypeChange = (e) => {
    const { name, checked } = e.target;
    setTypeFilter((prev) => ({ ...prev, [name]: checked }));
  };

  if (loading) return <div className="loading">Đang tải...</div>;

  return (
    <div className="category-page">
      <div className="category-container">
        <aside className="filter-sidebar">
           <h3 className="filter-main-title">Lọc theo loại</h3>
           <div className="filter-group">
              {["best-seller", "new", "normal"].map(type => (
                <label key={type}>
                  <input type="checkbox" name={type} checked={typeFilter[type]} onChange={handleTypeChange} />
                  {type}
                </label>
              ))}
           </div>
           <h3 className="filter-main-title">Giá</h3>
           <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
              <option value="">-- Sắp xếp --</option>
              <option value="asc">Thấp đến Cao</option>
              <option value="desc">Cao đến Thấp</option>
           </select>
        </aside>

        <main className="product-content">
          <h2 className="page-title">
            {searchKeyword ? `Kết quả tìm kiếm cho: "${searchKeyword}"` : "Tất cả sản phẩm"}
          </h2>
          <div className="product-grid-category">
            {displayProducts.length > 0 ? (
              displayProducts.map((item) => (
                <div className="product-card-luxury" key={item.id}>
                  <div className="product-img-box">
                    <img src={item.image} alt={item.name} />
                    <button className="heart-btn" onClick={() => toggleFavorite(item)}>
                      {favorites.some((f) => f.id === item.id) ? "❤️" : "🤍"}
                    </button>
                  </div>
                  <div className="product-info-box">
                    <h3 className="product-name">{item.name}</h3>
                    <p className="product-price">{item.price?.toLocaleString()}đ</p>
                    <button className="btn-add-to-cart" onClick={() => addToCart(item)}>Thêm vào giỏ hàng</button>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-result">Không tìm thấy sản phẩm nào.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}