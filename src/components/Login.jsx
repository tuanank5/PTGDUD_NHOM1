import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Login() {
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
            <h2>Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <button type="submit">Login</button>
            </form>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default Login;