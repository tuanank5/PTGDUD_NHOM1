import "../css/Menu.css"
export default function Menu() {
  return (
    <div className="Menu">
      {/* Logo */}
      <div className="logo">
        <img src="/image/logo.jpg" alt="logo" />
      </div>

      {/* Menu */}
      <ul className="menu">
        <li>TRANG CHỦ</li>
        <li>HÀNG MỚI</li>
        <li>BÁN CHẠY</li>
        <li>SẢN PHẨM</li>
        <li>NỮ</li>
        <li>NAM</li>
        <li>TÚI TOTE</li>
        <li>TÚI TRẺ EM</li>
        <li>GIỚI THIỆU</li>
      </ul>
    </div>
  );
}