//

import { useRef, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../api/productsAPI";
import { FavoritesContext } from "../../context/FavoritesContext";
import "../../styles/home/ProductSection.css";
import { useCart } from "../../context/CartContext";

export default function ProductSection() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const context = useContext(FavoritesContext);

  const favorites = context ? context.favorites : [];
  const toggleFavorite = context ? context.toggleFavorite : () => {};

  const { addToCart } = useCart();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getProducts();
        setAllProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const newProducts = allProducts.filter((p) => p.type === "new");
  const bestSeller = allProducts.filter((p) => p.type === "best-seller");

  const ProductSlider = ({ list }) => {
    const sliderRef = useRef(null);
    return (
      <div className="product-slider-wrapper">
        <button
          className="slide-btn left"
          onClick={() => (sliderRef.current.scrollLeft -= 300)}
        >
          ‹
        </button>
        <div className="product-slider" ref={sliderRef}>
          {list.map((item) => {
            const isLiked = favorites.some((fav) => fav.id === item.id);
            return (
              <div className="product-card" key={item.id}>
                <div className="product-img-box">
                  <button
                    className={`heart-btn ${isLiked ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      toggleFavorite(item);
                    }}
                  >
                    {isLiked ? "❤️" : "🤍"}
                  </button>
                  <Link to={`/product-detail/${item.id}`}>
                    <img src={item.image} alt={item.name} />
                  </Link>
                </div>
                <div className="product-info-content">
                  <h4>{item.name}</h4>
                  <p className="product-price">
                    {item.price?.toLocaleString()} VND
                  </p>
                  <button
                    className="btn-add-to-cart"
                    onClick={() => {
                      addToCart(item);
                    }}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <button
          className="slide-btn right"
          onClick={() => (sliderRef.current.scrollLeft += 300)}
        >
          ›
        </button>
      </div>
    );
  };

  if (loading) return <div>Đang tải...</div>;

  return (
    <div className="product-section">
      <h2 className="section-title">BỘ SƯU TẬP MỚI</h2>
      <ProductSlider list={newProducts} />
      <h2 className="section-title">SẢN PHẨM BÁN CHẠY</h2>
      <ProductSlider list={bestSeller} />
    </div>
  );
}


