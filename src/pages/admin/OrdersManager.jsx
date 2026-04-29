import React, { useEffect, useState } from "react";

import Center from "../../components/Center";

import "../../styles/adminTable.css";

import Header from "../admin/Header";

const OrdersManager = () => {
  // =========================
  // STATES
  // =========================

  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);

  // =========================
  // LOAD DATA
  // =========================

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data.orders || []);
        setUsers(data.users || []);
      });
  }, []);

  // =========================
  // UPDATE STATUS
  // =========================

  const handleUpdateStatus = (
    id,
    newStatus
  ) => {
    const updatedOrders = orders.map(
      (order) =>
        order.id === id
          ? {
              ...order,
              status: newStatus,
            }
          : order
    );

    setOrders(updatedOrders);

    alert("Cập nhật trạng thái thành công!");
  };

  return (
    <div>
      <Header />

      <br />
      <br />

      <Center>
        {/* TITLE */}

        <h2 className="dashboard-title">
          Quản lý đơn hàng
        </h2>

        {/* TABLE */}

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>

              <th>Khách hàng</th>

              <th>Sản phẩm</th>

              <th>Tổng tiền</th>

              <th>Trạng thái</th>

              <th>Cập nhật</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => {
              // TÌM USER

              const user = users.find(
                (u) =>
                  Number(u.id) ===
                  Number(order.userId)
              );

              return (
                <tr key={order.id}>
                  {/* ID */}

                  <td>{order.id}</td>

                  {/* CUSTOMER */}

                  <td>
                    {order.shippingInfo
                      ?.fullName ||
                      user?.username ||
                      "Không có tên"}
                  </td>

                  {/* PRODUCTS */}

                  <td>
                    {order.items
                      ?.map((p) => p.name)
                      .join(", ")}
                  </td>

                  {/* TOTAL */}

                  <td>
                    {order.total.toLocaleString()}
                    ₫
                  </td>

                  {/* STATUS */}

                  <td>
                    <span
                      className={`admin-status ${order.status}`}
                    >
                      {order.status}
                    </span>
                  </td>

                  {/* UPDATE STATUS */}

                  <td>
                    <select
                      className="status-select"
                      value={order.status}
                      onChange={(e) =>
                        handleUpdateStatus(
                          order.id,
                          e.target.value
                        )
                      }
                    >
                      <option value="pending">
                        pending
                      </option>

                      <option value="completed">
                        completed
                      </option>

                      <option value="cancelled">
                        cancelled
                      </option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Center>
    </div>
  );
};

export default OrdersManager;