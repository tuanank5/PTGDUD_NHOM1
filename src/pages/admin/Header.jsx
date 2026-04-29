import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FavoritesContext } from "../../context/FavoritesContext";
import "../../styles/Header.css";

export default function Header() {
  const navigate = useNavigate();

  const { logout } = useContext(AuthContext);

  const { favorites } = useContext(FavoritesContext);

  return (
    <header className="header-luxury">
      <div className="header-wrapper">
        <div
          className="logo-luxury"
          // onClick={() => navigate("/admin/dashboard")}
          // style={{ cursor: "pointer" }}
        >
          <span className="brand-name">AAAAA</span>
          <span className="brand-sub">LUXURY BAGS</span>
        </div>

        <div className="actions-luxury">
          <div
            className="action-item"
            onClick={() => navigate("/admin/dashboard")}
            style={{ cursor: "pointer" }}
          >
            <div className="cart-lux-wrapper">
              <span className="lux-icon">🏠</span>
            </div>
            <span className="lux-label">Trang chủ</span>
          </div>
          {/* <div
            className="action-item"
            onClick={() => navigate("/admin/orders")}
            style={{ cursor: "pointer" }}
          >
            <div className="cart-lux-wrapper">
              <span className="lux-icon">📦</span>
            </div>
            <span className="lux-label">Quản lý đơn hàng</span>
          </div> */}

          <div
            className="action-item"
            onClick={() => navigate("/admin/users")}
            style={{ cursor: "pointer" }}
          >
            <div className="cart-lux-wrapper">
              <span className="lux-icon">👤</span>
            </div>
            <span className="lux-label">Quản lý tài khoản</span>
          </div>

          {/* <div
            className="action-item"
            onClick={() => navigate("/admin/products")}
            style={{ cursor: "pointer" }}
          >
            <div className="cart-lux-wrapper">
              <span className="lux-icon">🛒</span>
            </div>
            <span className="lux-label">Quản lý sản phẩm</span>
          </div> */}

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
        </div>
      </div>
    </header>
  );
}
