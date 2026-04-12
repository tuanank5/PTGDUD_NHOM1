import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/productsAPI"; 
import "../../styles/home/ProductSection.css";

export default function ProductSection() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState({});

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProducts();
        setAllProducts(data);
      } catch (error) {
        console.error("Lỗi fetch dữ liệu:", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const toggleFavorite = (e, id) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const newProducts = allProducts.filter(p => p.type === "new");
  const bestSeller = allProducts.filter(p => p.type === "best-seller");

  const ProductSlider = ({ list, showTag }) => {
    const sliderRef = useRef(null);
    const scroll = (dir) => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += dir * 300;
      }
    };

    if (list.length === 0) return <p className="no-data">Đang cập nhật sản phẩm...</p>;

    return (
      <div className="product-slider-wrapper">
        <button className="slide-btn left" onClick={() => scroll(-1)}>‹</button>
        <div className="product-slider" ref={sliderRef}>
          {list.map((item) => {
            const targetPath = `/product-detail/${item.id}`;
            const isLiked = favorites[item.id];
            
            return (
              <div className="product-card" key={item.id}>
                <div className="product-img-box">
                  {/* Nhãn Tag sản phẩm */}
                  {showTag && item.tag && <span className="product-tag">{item.tag}</span>}
                  
                  {/* Nút TRÁI TIM dùng Button + Emoji chuẩn Category */}
                  <button 
                    className={`heart-btn ${isLiked ? 'active' : ''}`}
                    onClick={(e) => toggleFavorite(e, item.id)}
                  >
                    {isLiked ? '❤️' : '🤍'}
                  </button>

                  <Link to={targetPath}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>

                <div className="product-info-content">
                  <Link to={targetPath} className="product-name-link">
                    <h4>{item.name}</h4>
                  </Link>
                  <p className="product-price">
                    {item.price?.toLocaleString('vi-VN')} VND
                  </p>
                  <Link to={targetPath}>
                    <button className="btn-buy-now">Mua ngay</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <button className="slide-btn right" onClick={() => scroll(1)}>›</button>
      </div>
    );
  };

  if (loading) return <div className="loading">Đang tải bộ sưu tập...</div>;

  return (
    <div className="product-section">
      <h2 className="section-title">BỘ SƯU TẬP MỚI</h2>
      <ProductSlider list={newProducts} showTag={true} />
      <h2 className="section-title">SẢN PHẨM BÁN CHẠY</h2>
      <ProductSlider list={bestSeller} showTag={true} />
    </div>
  );
}