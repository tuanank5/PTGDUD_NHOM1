// sửa menu còn Trang chủ Sản phẩm Túi nữ Túi nam Túi tote Túi trẻ em Giới thiệu

import "../styles/Menu.css";
import { Link } from "react-router-dom";

export default function Menu() {
 const menuItems = [
  { title: "Trang chủ", path: "/" },
  { title: "Sản phẩm", path: "/products" },

  {
    title: "Túi nữ",
    mega: [
      {
        title: "Danh mục",
        items: [
          "Túi đeo chéo",
          "Túi đeo vai",
          "Túi xách tay",
          "Túi mini",
        ],
      },
      {
        title: "Phụ kiện",
        items: [
          "Ví nữ",
          "Clutch dự tiệc",
          "Túi cao cấp",
        ],
      },
    ],
  },

  {
    title: "Túi nam",
    mega: [
      {
        title: "Phổ biến",
        items: [
          "Túi đeo chéo nam",
          "Túi công sở",
          "Balo nam",
        ],
      },
      {
        title: "Khác",
        items: [
          "Túi du lịch",
          "Ví nam",
        ],
      },
    ],
  },

  {
    title: "Túi tote",
    mega: [
      {
        title: "Chất liệu",
        items: ["Tote vải", "Tote da", "Tote canvas"],
      },
      {
        title: "Kiểu dáng",
        items: ["Tote mini", "Tote basic"],
      },
    ],
  },

  {
    title: "Túi trẻ em",
    mega: [
      {
        title: "Bé trai",
        items: ["Balo", "Túi hoạt hình"],
      },
      {
        title: "Bé gái",
        items: ["Túi mini", "Túi dễ thương"],
      },
    ],
  },

  { title: "Giới thiệu", path: "/about" },
];

  return (
    <nav className="menu-luxury-navy">
      <div className="menu-container">
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
  {!item.mega ? (
    <Link to={item.path} className="menu-link">
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