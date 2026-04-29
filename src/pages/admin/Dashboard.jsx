

import Center from "../../components/Center";

import "../../styles/adminTable.css";

import { useNavigate } from "react-router-dom";

import Header from "../admin/Header";

// ICONS

import {
  FaShoppingCart,
  FaUsers,
  FaChartBar,
  FaBoxOpen,
} from "react-icons/fa";

// =========================
// FEATURES
// =========================

const features = [
  {
    label: "Quản lý đơn hàng",
    path: "/admin/orders",
    icon: <FaShoppingCart />,
    color: "#f7b731",
  },

  {
    label: "Quản lý tài khoản",
    path: "/admin/users",
    icon: <FaUsers />,
    color: "#20bf6b",
  },

  {
    label: "Thống kê doanh thu",
    path: "/admin/revenue",
    icon: <FaChartBar />,
    color: "#3867d6",
  },

  {
    label: "Quản lý sản phẩm",
    path: "/admin/products",
    icon: <FaBoxOpen />,
    color: "#eb3b5a",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <Header />

      <br />
      <br />

      <Center>
        {/* TITLE */}

        <h2 className="dashboard-title">
          Hệ thống quản trị
        </h2>

        {/* FEATURES */}

        <div className="dashboard-features">
          {features.map((f) => (
            <div
              key={f.label}
              className="dashboard-feature-card"
              style={{
                background: f.color,
              }}
              onClick={() => navigate(f.path)}
            >
              {/* ICON */}

              <div className="dashboard-feature-icon">
                {f.icon}
              </div>

              {/* LABEL */}

              <span className="dashboard-feature-label">
                {f.label}
              </span>
            </div>
          ))}
        </div>
      </Center>
    </div>
  );
}