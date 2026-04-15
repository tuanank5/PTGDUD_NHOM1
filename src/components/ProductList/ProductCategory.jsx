import React, { useState, useEffect } from "react";
import { getProducts } from "../../api/productsAPI";
import "../../styles/ProductList/ProductCategory.css";

import { useCart } from "../../context/CartContext";

export default function ProductCategory() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({});

  const { addToCart } = useCart();

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

  const toggleFavorite = (id) => {
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) {
    return <div className="loading">Đang tải sản phẩm...</div>;
  }

  return (
    <div className="category-page">
      <div className="category-container">
        <aside className="filter-sidebar">
          {/* TÚI NỮ */}
          <div className="filter-section">
            <h3 className="filter-main-title">Túi Nữ</h3>
            <div className="filter-group">
              <h4 className="sub-group-title">Danh mục</h4>
              <label>
                <input type="checkbox" /> Túi đeo chéo
              </label>
              <label>
                <input type="checkbox" /> Túi đeo vai
              </label>
              <label>
                <input type="checkbox" /> Túi xách tay
              </label>
              <label>
                <input type="checkbox" /> Túi mini
              </label>
            </div>
            <div className="filter-group">
              <h4 className="sub-group-title">Phụ kiện</h4>
              <label>
                <input type="checkbox" /> Ví nữ
              </label>
              <label>
                <input type="checkbox" /> Clutch dự tiệc
              </label>
              <label>
                <input type="checkbox" /> Túi cao cấp
              </label>
            </div>
          </div>

          {/* TÚI NAM */}
          <div className="filter-section">
            <h3 className="filter-main-title">Túi Nam</h3>
            <div className="filter-group">
              <h4 className="sub-group-title">Phổ biến</h4>
              <label>
                <input type="checkbox" /> Túi đeo chéo nam
              </label>
              <label>
                <input type="checkbox" /> Túi công sở
              </label>
              <label>
                <input type="checkbox" /> Balo nam
              </label>
            </div>
            <div className="filter-group">
              <h4 className="sub-group-title">Khác</h4>
              <label>
                <input type="checkbox" /> Túi du lịch
              </label>
              <label>
                <input type="checkbox" /> Ví nam
              </label>
            </div>
          </div>

          {/* TÚI TOTE */}
          <div className="filter-section">
            <h3 className="filter-main-title">Túi Tote</h3>
            <div className="filter-group">
              <h4 className="sub-group-title">Chất liệu</h4>
              <label>
                <input type="checkbox" /> Tote vải
              </label>
              <label>
                <input type="checkbox" /> Tote da
              </label>
              <label>
                <input type="checkbox" /> Tote canvas
              </label>
            </div>
            <div className="filter-group">
              <h4 className="sub-group-title">Kiểu dáng</h4>
              <label>
                <input type="checkbox" /> Tote mini
              </label>
              <label>
                <input type="checkbox" /> Tote basic
              </label>
            </div>
          </div>

          {/* TÚI TRẺ EM */}
          <div className="filter-section">
            <h3 className="filter-main-title">Túi Trẻ Em</h3>
            <div className="filter-group">
              <h4 className="sub-group-title">Bé trai</h4>
              <label>
                <input type="checkbox" /> Balo
              </label>
              <label>
                <input type="checkbox" /> Túi hoạt hình
              </label>
            </div>
            <div className="filter-group">
              <h4 className="sub-group-title">Bé gái</h4>
              <label>
                <input type="checkbox" /> Túi mini
              </label>
              <label>
                <input type="checkbox" /> Túi dễ thương
              </label>
            </div>
          </div>

          {/* KÍCH THƯỚC */}
          <div className="filter-section">
            <h3 className="filter-main-title">Kích thước</h3>
            <div className="filter-group">
              <label>
                <input type="checkbox" /> Size nhỏ (Mini)
              </label>
              <label>
                <input type="checkbox" /> Size 23
              </label>
              <label>
                <input type="checkbox" /> Size 27
              </label>
              <label>
                <input type="checkbox" /> Size lớn
              </label>
            </div>
          </div>

          {/* GIÁ */}
          <div className="filter-section">
            <h3 className="filter-main-title">Giá</h3>
            <div className="price-range">
              <input type="number" placeholder="min" />
              <span>-</span>
              <input type="number" placeholder="max" />
            </div>
            <button className="btn-apply-filter">Áp dụng bộ lọc</button>
          </div>
        </aside>

        {/* NỘI DUNG SẢN PHẨM */}
        <main className="product-content">
          <h2 className="page-title">Danh Mục Sản Phẩm</h2>
          <div className="product-grid-category">
            {products.map((item) => (
              <div className="product-card-luxury" key={item.id}>
                <div className="product-img-box">
                  <div className="badge-new">Mới</div>
                  <img src={item.image} alt={item.name} />
                  <button
                    className={`heart-btn ${favorites[item.id] ? "active" : ""}`}
                    onClick={() => toggleFavorite(item.id)}
                  >
                    {favorites[item.id] ? "❤️" : "🤍"}
                  </button>
                </div>

                <div className="product-info-box">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-price">{item.price}</p>
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

