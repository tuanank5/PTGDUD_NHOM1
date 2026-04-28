import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { FavoritesContext } from "../context/FavoritesContext";
import "../styles/Header.css";
import CartDrawer from "./CartDrawer";

export default function Header() {
  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  const { favorites } = useContext(FavoritesContext);

  const { totalItems } = useCart();

  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <header className="header-luxury">
        <div className="header-wrapper">
          <div
            className="logo-luxury"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <span className="brand-name">AAAAA</span>
            <span className="brand-sub">LUXURY BAGS</span>
          </div>

         

          <div className="actions-luxury">
            <div
              className="action-item"
              onClick={() => navigate("/favorites")}
              style={{ cursor: "pointer" }}
            >
              <div className="cart-lux-wrapper">
                <span className="lux-icon">❤️</span>
                {favorites.length > 0 && (
                  <span
                    className="cart-lux-count"
                    style={{ backgroundColor: "#ff4d4d" }}
                  >
                    {favorites.length}
                  </span>
                )}
              </div>
              <span className="lux-label">Yêu thích</span>
            </div>

            {/* Giỏ hàng */}
            <div
              className="action-item"
              onClick={() => setCartOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <div className="cart-lux-wrapper">
                <span className="lux-icon">🛒</span>
                {totalItems > 0 && (
                  <span className="cart-lux-count">{totalItems}</span>
                )}
              </div>
              <span className="lux-label">Giỏ hàng</span>
            </div>

            {user && (
              <div
                className="action-item"
                onClick={() => navigate("/orders")}
                style={{ cursor: "pointer" }}
              >
                <span className="lux-icon">📦</span>
                <span className="lux-label">Đơn hàng</span>
              </div>
            )}

            {!user ? (
              <div
                className="action-item"
                onClick={() => navigate("/login")}
                style={{ cursor: "pointer" }}
              >
                <span className="lux-icon">👤</span>
                <span className="lux-label">Tài khoản</span>
              </div>
            ) : (
              <div
                className="action-item"
                onClick={() => {
                  logout();
                  alert("Đăng xuất thành công");
                  navigate("/");
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
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
