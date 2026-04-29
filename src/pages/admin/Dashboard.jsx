import Center from "../../components/Center";
import "../../styles/adminDashboard.css";
import { useNavigate } from "react-router-dom";
import Header from "../admin/Header";
const features = [
  {
    label: "Quản lý đơn hàng",
    path: "/admin/orders",
    img: "/images/home/category/tuidulich.jpg",
    color: "#f7b731",
  },
  {
    label: "Quản lý tài khoản",
    path: "/admin/users",
    img: "/images/home/category/tuinam.jpg",
    color: "#20bf6b",
  },
  {
    label: "Thống kê doanh thu",
    path: "/admin/revenue",
    img: "/images/home/category/tuitote.jpg",
    color: "#3867d6",
  },
    {
    label: "Quản lý sản phẩm",
    path: "/admin/products",
    img: "/images/home/category/tuitote.jpg",
    color: "red",
  },
];

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <br />
      <br />
      <Center>
        <h2 className="dashboard-title">Hệ thống quản trị</h2>
        <div className="dashboard-features">
          {features.map((f) => (
            <div
              key={f.label}
              className="dashboard-feature-card"
              style={{ background: f.color }}
              onClick={() => navigate(f.path)}
            >
              <img src={f.img} alt={f.label} className="dashboard-feature-img" />
              <span className="dashboard-feature-label">{f.label}</span>
            </div>
          ))}
        </div>
      </Center>
    </div>
  );
}
