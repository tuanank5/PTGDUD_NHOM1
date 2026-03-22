import { useState } from "react";

function useAuth() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    const register = async (username, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const ex = users.find((u) => u.username === username);
        if (ex) throw new Error("Users exists");
        const newUser = {username, password};
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        return newUser;
    };

    const login = async (username, password) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find((u) => u.username === username && u.password === password);
        if (!user) throw new Error("Invalid account");
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
        return user;
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return {user, register, login, logout};
}

export default useAuth;