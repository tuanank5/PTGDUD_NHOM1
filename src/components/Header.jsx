import { useNavigate } from "react-router-dom";
import { useContext } from "react"; 
import "../styles/Header.css";
import { FavoritesContext } from "../context/FavoritesContext";

export default function Header() {
  const navigate = useNavigate();
  
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header-luxury">
      <div className="header-wrapper">
        <div className="logo-luxury" onClick={() => navigate('/')} style={{ cursor: "pointer" }}>
          <span className="brand-name">AAAAA</span>
          <span className="brand-sub">LUXURY BAGS</span>
        </div>

        <div className="search-luxury">
          <input type="text" placeholder="Tìm kiếm sản phẩm..." />
          <button className="btn-search-lux">🔍</button>
        </div>

        <div className="actions-luxury">
          <div 
            className="action-item" 
            onClick={() => navigate('/favorites')} 
            style={{ cursor: "pointer" }}
          >
            <div className="cart-lux-wrapper">
              <span className="lux-icon">❤️</span>
              {favorites.length > 0 && (
                <span className="cart-lux-count" style={{ backgroundColor: '#ff4d4d' }}>
                  {favorites.length}
                </span>
              )}
            </div>
            <span className="lux-label">Yêu thích</span>
          </div>

          <div className="action-item">
            <div className="cart-lux-wrapper">
              <span className="lux-icon">🛒</span>
              <span className="cart-lux-count">0</span>
            </div>
            <span className="lux-label">Giỏ hàng</span>
          </div>

          <div 
            className="action-item" 
            onClick={() => navigate('/login')} 
            style={{ cursor: "pointer" }}
          >
            <span className="lux-icon">👤</span>
            <span className="lux-label">Tài khoản</span>
          </div>
        </div>
      </div>
    </header>
  );
}