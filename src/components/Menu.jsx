import { Link } from "react-router-dom";
import "../styles/Menu.css";

export default function Menu() {
  const menuItems = [
    { title: "Trang chủ", path: "/" },
    { title: "Sản phẩm", path: "/products" },
    { title: "Túi nữ", path: "/products", category: "nu" },
    { title: "Túi nam", path: "/products", category: "nam" },
    { title: "Túi tote", path: "/products", category: "tote" },
    { title: "Túi du lịch", path: "/products", category: "dulich" },
    { title: "Giới thiệu", path: "/about" },
  ];

  return (
    <nav className="menu-luxury-navy">
      <div className="menu-container">
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              {!item.mega ? (
                <Link
                  to={
                    item.category
                      ? `${item.path}?category=${item.category}`
                      : item.path
                  }
                  className="menu-link"
                >
                  {item.title}
                </Link>
              ) : (
                <>
                  <Link to="/products" className="menu-link">
                    {item.title}
                  </Link>
                  <div className="mega-menu">
                    {item.mega.map((col, i) => (
                      <div key={i} className="mega-column">
                        <h4 className="mega-title">{col.title}</h4>
                        {col.items.map((sub, j) => (
                          <Link key={j} to="/products" className="mega-item">
                            {sub}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
