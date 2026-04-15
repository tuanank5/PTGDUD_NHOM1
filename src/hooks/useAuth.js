import { useEffect, useState } from "react";
import { getUsers, registerUser } from "../api/usersAPI";

function useAuth() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    const register = async(username, password) => {
        const usersData = await getUsers();
        const users = Array.isArray(usersData) ? usersData : [];
        const ex = users.find((u) => u.username === username);
        if (ex) throw new Error("Users exists");
        const newUser = { username, password, role: "user" };

        await registerUser(newUser);
        return newUser;
    };

    const login = async(username, password) => {
        const usersData = await getUsers();
        const users = Array.isArray(usersData) ? usersData : [];
        const user = users.find((u) => u.username === username && u.password === password);
        if (!user) throw new Error("Invalid account");
        setUser(user);
        return user;
    };

    const logout = () => {
        setUser(null);
    };

    return { user, register, login, logout };
}

export default useAuth;