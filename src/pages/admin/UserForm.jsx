import { useEffect, useState } from "react";
import {
  addUser,
  getUsers,
  updateUser,
} from "../../api/usersAPI";

import Header from "./Header";

export default function UserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  // id dùng để biết đang update user nào
  const [editingId, setEditingId] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setRole("");
    setEditingId(null);
  };

  const handleSubmit = async () => {

    if (!username || !password || !role) {
      return alert("Vui lòng nhập đầy đủ thông tin!");
    }

    const userData = {
      username,
      password,
      role,
    };

    if (editingId !== null) {
      const updatedUser = await updateUser(
        editingId,
        userData
      );

      setUsers((prev) =>
        prev.map((u) =>
          u.id === editingId ? updatedUser : u
        )
      );

      alert("Cập nhật tài khoản thành công!");
    }

    else {
      const addedUser = await addUser(userData);

      setUsers((prev) => [...prev, addedUser]);

      alert("Thêm tài khoản thành công!");
    }

    resetForm();
  };


  const handleEdit = (user) => {
    setUsername(user.username);
    setPassword(user.password);
    setRole(user.role);

    setEditingId(user.id);

    // kéo lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header />

      <div style={{ padding: "30px" }}>
        <h2>Quản lý tài khoản</h2>

        <div
          style={{
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            style={{
              padding: "10px",
              marginRight: "10px",
            }}
          />

          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              padding: "10px",
              marginRight: "10px",
            }}
          />

          <select
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
            style={{
              padding: "10px",
              marginRight: "10px",
            }}
          >
            <option value="">
              -- Chọn role --
            </option>

            <option value="admin">
              Admin
            </option>

            <option value="user">
              User
            </option>
          </select>

          <button onClick={handleSubmit}>
            {editingId !== null
              ? "Cập nhật"
              : "Thêm"}
          </button>
        </div>

        {/* =========================
            TABLE
        ========================= */}

        <table
          border="1"
          cellPadding="10"
          width="100%"
        >
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Role</th>
              <th>Hành động</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>

                <td>{user.username}</td>

                <td>{user.password}</td>

                <td>{user.role}</td>

                <td>
                  <button
                    onClick={() =>
                      handleEdit(user)
                    }
                  >
                    Cập nhật
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}