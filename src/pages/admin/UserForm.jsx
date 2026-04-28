import { useEffect, useState } from "react";
import { getUsers, addUser, updateUser, deleteUser } from "../../api/usersAPI";

import Header from "./Header";

export default function UserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  const handleSubmit = async () => {
    if (!username || !password || !role) {
      return alert("Vui lòng nhập đầy đủ thông tin!");
    }

    const newUser = {
      username,
      password,
      role
    };

    if (id) {
      const updated = await updateUser(id, newUser);

      setUsers(prev =>
        prev.map(u => (u.id === id ? updated : u))
      );
    } else {
      const added = await addUser(newUser);

      setUsers(prev => [...prev, added]);
    }

    setUsername("");
    setPassword("");
    setRole("");
    setId(null);

    alert(id ? "Cập nhật thành công" : "Thêm thành công");
  };

  const handleUpdate = (u) => {
    setUsername(u.username);
    setPassword(u.password);
    setRole(u.role);
    setId(u.id);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Bạn có chắc muốn xóa không?");
    if (!confirmDelete) return;

    await deleteUser(id);
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <div style={{ padding: 20 }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- Chọn role --</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <br /><br />
        <button onClick={handleSubmit}>
          {id ? "Cập nhật" : "Thêm"}
        </button>

        <hr />

        <table border="1" cellPadding="10" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.password}</td>
                <td>{u.role}</td>

                <td>
                  <button onClick={() => handleUpdate(u)}>
                    Cập nhật
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => handleDelete(u.id)}
                  >
                    Xóa
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