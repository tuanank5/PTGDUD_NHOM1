/* UserForm.jsx */

import { useEffect, useState } from "react";

import {
  addUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../../api/usersAPI";

import Header from "./Header";

import "../../styles/adminTable.css";

export default function UserForm() {
  // =========================
  // STATES
  // =========================

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [id, setId] = useState(null);

  const [users, setUsers] = useState([]);

  // =========================
  // LOAD USERS
  // =========================

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await getUsers();
    setUsers(data);
  };

  // =========================
  // RESET FORM
  // =========================

  const resetForm = () => {
    setUsername("");
    setPassword("");
    setRole("");
    setId(null);
  };

  // =========================
  // ADD + UPDATE
  // =========================

  const handleSubmit = async () => {
    if (!username || !password || !role) {
      return alert("Vui lòng nhập đầy đủ thông tin!");
    }

    const newUser = {
      username,
      password,
      role,
    };

    // UPDATE

    if (id) {
      const updated = await updateUser(
        id,
        newUser
      );

      setUsers((prev) =>
        prev.map((u) =>
          u.id === id ? updated : u
        )
      );

      alert("Cập nhật tài khoản thành công!");
    }

    // ADD

    else {
      const added = await addUser(newUser);

      setUsers((prev) => [...prev, added]);

      alert("Thêm tài khoản thành công!");
    }

    resetForm();
  };

  // =========================
  // UPDATE FORM
  // =========================

  const handleUpdate = (u) => {
    setUsername(u.username);
    setPassword(u.password);
    setRole(u.role);

    setId(u.id);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================
  // DELETE
  // =========================

  // const handleDelete = async (id) => {
  //   const confirmDelete = window.confirm(
  //     "Bạn có chắc muốn xóa tài khoản này không?"
  //   );

  //   if (!confirmDelete) return;

  //   await deleteUser(id);

  //   setUsers((prev) =>
  //     prev.filter((u) => u.id !== id)
  //   );

  //   alert("Xóa thành công!");
  // };

  return (
    <>
      <Header />

      <div className="product-manager">
        {/* =========================
            FORM
        ========================= */}

        <div className="product-form">
          <h2 className="product-form-title">
            Quản lý tài khoản
          </h2>

          <div className="product-form-grid">
            {/* USERNAME */}

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />

            {/* PASSWORD */}

            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            {/* ROLE */}

            <select
              value={role}
              onChange={(e) =>
                setRole(e.target.value)
              }
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
          </div>

          {/* BUTTON */}

          <button
            className="product-btn product-btn-add"
            onClick={handleSubmit}
          >
            {id
              ? "Cập nhật tài khoản"
              : "Thêm tài khoản"}
          </button>
        </div>

        {/* =========================
            TABLE
        ========================= */}

        <table className="admin-table">
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
            {users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>

                <td>{u.username}</td>

                <td>{u.password}</td>

                <td>
                  <span
                    className={`product-type ${u.role}`}
                  >
                    {u.role}
                  </span>
                </td>

                {/* ACTION */}

                <td className="action-column">
                  <button
                    className="product-btn product-btn-edit"
                    onClick={() =>
                      handleUpdate(u)
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