import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Register() {
    const { register } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPW, setConfirmPW] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPW) {
            return alert("Mật khẩu không trùng khớp!");
        }

        try {
            await register(username, password);
            alert("Register success");

            setUsername("");
            setPassword("");
            setConfirmPW("");
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <>
            <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
            <form action="" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Tên tài khoản"
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <br />
                <input 
                    type="password" 
                    placeholder="Mật khẩu"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br />
                <input 
                    type="password" 
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPW} 
                    onChange={(e) => setConfirmPW(e.target.value)} 
                />
                <br />
                <br />
                <button type="submit">ĐĂNG KÝ</button>
            </form>
        </>
    )
}

export default Register;