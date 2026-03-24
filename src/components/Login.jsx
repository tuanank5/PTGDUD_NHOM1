import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const { login, logout } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            alert("Login success");
            console.log(localStorage);
        } catch (err) {
            alert(err.message);
        }
    }

    const handleLogout = () => {
        logout();
        console.log(localStorage);
    };

    return (
        <>
            <h2>ĐĂNG NHẬP</h2>
            <form action="" onSubmit={handleSubmit}>
                <p>Tên tài khoản <span style={{color: "red"}}>*</span></p>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <p>Mật khẩu <span style={{color: "red"}}>*</span></p>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <br />
                <button type="submit">ĐĂNG NHẬP</button>
            </form>
            <br />
            <button onClick={() => navigate("/register")}>Đăng ký tài khoản</button>
        </>
    )
}

export default Login;