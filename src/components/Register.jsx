import { useState } from "react";
import useAuth from "../hooks/useAuth";

function Register() {
    const { register } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(username, password);
            alert("Register success");
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <>
            <h2>Register</h2>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default Register;