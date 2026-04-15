//

import { useNavigate } from "react-router-dom";
import { useContext } from "react"; 
import "../../styles/Header.css";
import { FavoritesContext } from "../../context/FavoritesContext";
import { AuthContext } from "../../context/AuthContext";

export default function Header() {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);
  
  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header-luxury">
      <div className="header-wrapper">
        <div className="logo-luxury" onClick={() => navigate('/admin/dashboard')} style={{ cursor: "pointer" }}>
          <span className="brand-name">AAAAA</span>
          <span className="brand-sub">LUXURY BAGS</span>
        </div>

        <div className="actions-luxury">
          <div 
            className="action-item" 
            onClick={() => navigate('/admin/productForm')} 
            style={{ cursor: "pointer" }}
          >
            <div className="cart-lux-wrapper">
              <span className="lux-icon">🛒</span>
              {favorites.length > 0 && (
                <span className="cart-lux-count" style={{ backgroundColor: '#ff4d4d' }}>
                  {favorites.length}
                </span>
              )}
            </div>
            <span className="lux-label">Quản lý sản phẩm</span>
          </div>
          
          {!user ? (
            <div className="action-item" 
            onClick={() => navigate('/login')} 
            style={{ cursor: "pointer" }}
            >
              <span className="lux-icon">👤</span>
              <span className="lux-label">Tài khoản</span>
            </div>
          ) : (
            <div className="action-item" 
            onClick={() => {
              logout();
              alert("Đăng xuất thành công");
              navigate('/');
            }}
            style={{ cursor: "pointer" }}
            >
              <span className="lux-icon">👤</span>
              <span className="lux-label">Đăng xuất</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}