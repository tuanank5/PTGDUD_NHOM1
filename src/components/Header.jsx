import "../css/Header.css"
export default function Header() {
  return (
    <div>
      <div className="header-top">
        <span>CSKH Liên Hệ Nhóm 1: PTGDUD cô Hiền</span>

        <div className="header-right">
          {/* Tìm kiếm theo all hoặc từng cái */}
          <div className="search-box">
            <select>
              <option>All</option>
              <option>Túi nữ</option>
              <option>Túi nam</option>
              <option>Túi trẻ em</option>
              <option>Túi tote</option>
            </select>

            <input type="text" placeholder="Tìm kiếm..." />

            <button>🔍</button>
          </div>

          {/* Tài khoản */}
          <span className="icon-user">👤</span>

          {/* Giỏ hàng */}
          <span className="icon-cart">
            🛒
            <span className="cart-count">0</span>
          </span>
        </div>
      </div>
    </div>
  );
}