import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/Login.css";

import { AuthContext } from "../context/AuthContext";
import loginBg from "/images/login.jpg";

function Login() {
  const navigate = useNavigate();
  const { login, register, user } = useContext(AuthContext);

  const [mode, setMode] = useState("login");
  const [username, setUsername] = useState("");
  const [usernameForgot, setUsernameForgot] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPW, setConfirmPW] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (mode === "login") {
      try {
        const user = await login(username, password); // 👈 lấy ngay
        alert("Đăng nhập thành công!");
        if (user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } catch (err) {
        alert(err.message);
      }
    } else if (mode === "register") {
      if (password !== confirmPW) {
        return alert("Mật khẩu không trùng khớp!");
      }

      try {
        await register(username, password);
        setUsername("");
        setPassword("");
        setConfirmPW("");

        alert("Đăng ký thành công! Hãy đăng nhập lại.");
        setMode("login");
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert("Yêu cầu khôi phục đã gửi đến tài khoản: " + usernameForgot);
      setMode("login");
    }
  };

  if (user?.role === "admin") {
    return <Navigate to="/admin/dashboard" replace />;
  } else if (user?.role === "user") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="login-full-page">
      {/* PANEL TRÁI: ẢNH NỀN */}
      <div className="panel-left">
        <img src={loginBg} alt="Background" className="bg-image" />
      </div>

      {/* PANEL PHẢI: FORM CHÍNH */}
      <div className="panel-right">
        <div className="login-content-wrapper">
          {/* THƯƠNG HIỆU AAAAA */}
          <h1 className="brand-logo-text">AAAAA</h1>

          {/* CHỈ HIỆN TAB KHI KHÔNG TRONG CHẾ ĐỘ QUÊN MẬT KHẨU */}
          {mode !== "forgot" && (
            <div className="auth-tabs">
              <button
                className={mode === "login" ? "tab-item active" : "tab-item"}
                onClick={() => setMode("login")}
              >
                Đăng nhập
              </button>
              <button
                className={mode === "register" ? "tab-item active" : "tab-item"}
                onClick={() => setMode("register")}
              >
                Đăng ký tài khoản
              </button>
            </div>
          )}

          {mode === "forgot" && (
            <h3 className="forgot-title">Khôi phục mật khẩu</h3>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {mode !== "forgot" && (
              <>
                <input
                  type="text"
                  placeholder={"Tên tài khoản"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </>
            )}

            {/* HIỆN Ô EMAIL KHI ĐĂNG KÝ HOẶC QUÊN MẬT KHẨU */}
            {mode === "register" && (
              <input
                type="password"
                placeholder="Nhập lại mật khẩu"
                value={confirmPW}
                onChange={(e) => setConfirmPW(e.target.value)}
                required
              />
            )}

            {mode === "forgot" && (
              <input
                type="text"
                placeholder="Tên tài khoản"
                value={usernameForgot}
                onChange={(e) => setUsernameForgot(e.target.value)}
                required
              />
            )}

            <button type="submit" className="btn-submit-luxury">
              {mode === "login"
                ? "Đăng nhập"
                : mode === "register"
                  ? "Đăng ký ngay"
                  : "Gửi yêu cầu"}
            </button>
          </form>

          {/* DÃN CÁCH QUÊN MẬT KHẨU */}
          <div className="forgot-password-area">
            {mode === "login" ? (
              <span
                className="clickable-text"
                onClick={() => setMode("forgot")}
              >
                Quên mật khẩu?
              </span>
            ) : (
              <span className="clickable-text" onClick={() => setMode("login")}>
                Quay lại đăng nhập
              </span>
            )}
          </div>
        </div>

        {/* HỌA TIẾT TRANG TRÍ */}
        <div className="deco-circle top-right"></div>
        <div className="deco-circle bottom-left"></div>
      </div>
    </div>
  );
}

export default Login;
