import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";

export default function NotFound() {
  const { user } = useContext(AuthContext);

  if (user?.role === "admin") {
    return (
        <div>
        <h2>404 Not Found</h2>
        <Link to="/admin/dashboard">Quay về Trang chủ</Link>
        </div>
    );
  }

  return (
    <div>
      <h2>404 Not Found</h2>
      <Link to="/">Quay về Trang chủ</Link>
    </div>
  );
}