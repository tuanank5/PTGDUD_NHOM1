import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "../styles/NotFound.css";

export default function NotFound() {
  const { user } = useContext(AuthContext);

  if (user?.role === "admin") {
    return (
      <div className="notfound">
        <h2>404 Not Found</h2>
        <Link to="/admin/dashboard">Quay về Trang chủ</Link>
      </div>
    );
  }

  return (
    <div className="notfound">
      <h2>404 Not Found</h2>
      <Link to="/">Quay về Trang chủ</Link>
    </div>
  );
}
