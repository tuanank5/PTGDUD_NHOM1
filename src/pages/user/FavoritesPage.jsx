import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FavoritesContext } from "../../context/FavoritesContext";
import Header from "../../components/Header";
import "../../styles/FavoritesPage.css";

import { useCart } from "../../context/CartContext";

export default function FavoritesPage() {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const { addToCart } = useCart();

  useEffect(() => {
    document.body.classList.add("hide-menu");
    return () => document.body.classList.remove("hide-menu");
  }, []);

  return (
    <div className="favorites-page-wrapper">
      <Header />

      <main className="favorites-main">
        <h2 className="section-title">SẢN PHẨM YÊU THÍCH</h2>

        {favorites.length === 0 ? (
          <div className="empty-state">
            <p>Danh sách yêu thích của bạn đang trống</p>
            <button
              className="btn-buy-now"
              style={{ width: "200px", margin: "20px auto" }}
              onClick={() => navigate("/")}
            >
              QUAY LẠI CỬA HÀNG
            </button>
          </div>
        ) : (
          <div className="favorites-grid-layout">
            {favorites.map((item) => (
              <div className="product-card" key={item.id}>
                <div className="product-img-box">
                  <button
                    className="heart-btn active"
                    onClick={() => toggleFavorite(item)}
                  >
                    ❤️
                  </button>
                  <img
                    src={item.image}
                    alt={item.name}
                    onClick={() => navigate(`/product-detail/${item.id}`)}
                  />
                </div>

                <div className="product-info-content">
                  <h4 onClick={() => navigate(`/product-detail/${item.id}`)}>
                    {item.name}
                  </h4>
                  <p className="product-price">
                    {item.price?.toLocaleString("vi-VN")} VND
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
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
