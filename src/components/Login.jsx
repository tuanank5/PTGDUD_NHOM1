//Phân quyền

import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; 

import loginBg from "/images/login.jpg"; 
import fbLogo from "/images/fb.jpg"; 
import ggLogo from "/images/gg.jpg"; 

function Login() {
    const navigate = useNavigate();
    const { login } = useAuth();
    
    const [mode, setMode] = useState('login'); 
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (mode === 'login') {
            try {
                await login(username, password);
                alert("Đăng nhập thành công!");
                navigate("/"); 
            } catch (err) {
                alert("Sai tài khoản hoặc mật khẩu!");
            }
        } else if (mode === 'register') {
            alert("Đăng ký thành công! Hãy đăng nhập lại.");
            setMode('login');
        } else {
            alert("Yêu cầu khôi phục đã gửi đến: " + email);
            setMode('login');
        }
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
                    {mode !== 'forgot' && (
                        <div className="auth-tabs">
                            <button className={mode === 'login' ? "tab-item active" : "tab-item"} onClick={() => setMode('login')}>Đăng nhập</button>
                            <button className={mode === 'register' ? "tab-item active" : "tab-item"} onClick={() => setMode('register')}>Đăng ký tài khoản</button>
                        </div>
                    )}

                    {mode === 'forgot' && <h3 className="forgot-title">Khôi phục mật khẩu</h3>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        {mode !== 'forgot' && (
                            <input 
                                type="text" 
                                placeholder={mode === 'login' ? "Email của bạn" : "Tên tài khoản mới"}
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        )}
                        
                        {/* HIỆN Ô EMAIL KHI ĐĂNG KÝ HOẶC QUÊN MẬT KHẨU */}
                        {(mode === 'register' || mode === 'forgot') && (
                            <input 
                                type="email" 
                                placeholder="Địa chỉ Email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        )}

                        {mode !== 'forgot' && (
                            <input 
                                type="password" 
                                placeholder="Mật khẩu"
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        )}

                        <button type="submit" className="btn-submit-luxury">
                            {mode === 'login' ? "Đăng nhập" : mode === 'register' ? "Đăng ký ngay" : "Gửi yêu cầu"}
                        </button>
                    </form>

                    {/* DÃN CÁCH QUÊN MẬT KHẨU */}
                    <div className="forgot-password-area">
                        {mode === 'login' ? (
                            <span className="clickable-text" onClick={() => setMode('forgot')}>Quên mật khẩu?</span>
                        ) : (
                            <span className="clickable-text" onClick={() => setMode('login')}>Quay lại đăng nhập</span>
                        )}
                    </div>

                    <div className="social-divider">
                        <span>Or</span>
                    </div>
                    
                    {/* LOGO NẰM NGANG VÀ FULL TRÒN */}
                    <div className="social-icons-group">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="social-circle">
                            <img src={fbLogo} alt="FB" className="full-img-logo" />
                        </a>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer" className="social-circle">
                            <img src={ggLogo} alt="GG" className="full-img-logo" />
                        </a>
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