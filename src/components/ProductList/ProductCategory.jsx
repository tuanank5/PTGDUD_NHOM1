import React, { useState } from 'react';
import "../../styles/ProductList/ProductCategory.css";

export default function ProductCategory() {
  const [favorites, setFavorites] = useState({});

  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const products = [
    { id: 1, name: "TÚI ĐEO VAI NỮ ALAYABOUCLE", price: "2.350.000 VND", img: "/images/products/bag1.jpg" },
    { id: 2, name: "TÚI XÁCH TAY LADY DIOR STYLE", price: "3.150.000 VND", img: "/images/products/bag2.jpg" },
    { id: 3, name: "TÚI TOTE CANVAS BASIC", price: "850.000 VND", img: "/images/products/bag3.jpg" },
    { id: 4, name: "CLUTCH DỰ TIỆC SANG TRỌNG", price: "1.950.000 VND", img: "/images/products/bag4.jpg" },
    { id: 5, name: "TÚI ĐEO CHÉO NAM CÔNG SỞ", price: "2.100.000 VND", img: "/images/products/bag5.jpg" },
    { id: 6, name: "BALO VẢI CANVAS HOA", price: "1.250.000 VND", img: "/images/products/bag6.jpg" },
  ];

  return (
    <div className="category-page">
      <div className="category-container">
        <aside className="filter-sidebar">
          
          {/* TÚI NỮ */}
          <div className="filter-section">
            <h3 className="filter-main-title">Túi Nữ</h3>
            <div className="filter-group">
              <h4 className="sub-group-title">Danh mục</h4>
              <label><input type="checkbox" /> Túi đeo chéo</label>
              <label><input type="checkbox" /> Túi đeo vai</label>
              <label><input type="checkbox" /> Túi xách tay</label>
              <label><input type="checkbox" /> Túi mini</label>
            </div>
            <div className="filter-group">
              <h4 className="sub-group-title">Phụ kiện</h4>
              <label><input type="checkbox" /> Ví nữ</label>
              <label><input type="checkbox" /> Clutch dự tiệc</label>
              <label><input type="checkbox" /> Túi cao cấp</label>
            </div>
          </div>

          {/* TÚI NAM */}
          <div className="filter-section">
            <h3 className="filter-main-title">Túi Nam</h3>
            <div className="filter-group">
              <h4 className="sub-group-title">Phổ biến</h4>
              <label><input type="checkbox" /> Túi đeo chéo nam</label>
              <label><input type="checkbox" /> Túi công sở</label>
              <label><input type="checkbox" /> Balo nam</label>
            </div>
            <div className="filter-group">
              <h4 className="sub-group-title">Khác</h4>
              <label><input type="checkbox" /> Túi du lịch</label>
              <label><input type="checkbox" /> Ví nam</label>
            </div>
          </div>

          {/* TÚI TOTE */}
          <div className="filter-section">
            <h3 className="filter-main-title">Túi Tote</h3>
            <div className="filter-group">
              <h4 className="sub-group-title">Chất liệu</h4>
              <label><input type="checkbox" /> Tote vải</label>
              <label><input type="checkbox" /> Tote da</label>
              <label><input type="checkbox" /> Tote canvas</label>
            </div>
            <div className="filter-group">
              <h4 className="sub-group-title">Kiểu dáng</h4>
              <label><input type="checkbox" /> Tote mini</label>
              <label><input type="checkbox" /> Tote basic</label>
            </div>
          </div>

          {/* TÚI TRẺ EM */}
          <div className="filter-section">
            <h3 className="filter-main-title">Túi Trẻ Em</h3>
            <div className="filter-group">
              <h4 className="sub-group-title">Bé trai</h4>
              <label><input type="checkbox" /> Balo</label>
              <label><input type="checkbox" /> Túi hoạt hình</label>
            </div>
            <div className="filter-group">
              <h4 className="sub-group-title">Bé gái</h4>
              <label><input type="checkbox" /> Túi mini</label>
              <label><input type="checkbox" /> Túi dễ thương</label>
            </div>
          </div>

          {/* KÍCH THƯỚC */}
          <div className="filter-section">
            <h3 className="filter-main-title">Kích thước</h3>
            <div className="filter-group">
              <label><input type="checkbox" /> Size nhỏ (Mini)</label>
              <label><input type="checkbox" /> Size 23</label>
              <label><input type="checkbox" /> Size 27</label>
              <label><input type="checkbox" /> Size lớn</label>
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
                  <img src={item.img} alt={item.name} />
                  <button 
                    className={`heart-btn ${favorites[item.id] ? 'active' : ''}`}
                    onClick={() => toggleFavorite(item.id)}
                  >
                    {favorites[item.id] ? '❤️' : '🤍'}
                  </button>
                </div>
                
                <div className="product-info-box">
                  <h3 className="product-name">{item.name}</h3>
                  <p className="product-price">{item.price}</p>
                  <button className="btn-buy-now">Mua ngay</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}