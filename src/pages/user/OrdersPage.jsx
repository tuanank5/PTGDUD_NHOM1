import { useEffect, useState } from "react";
import Header from "../../components/Header";
import "../../styles/OrdersPage.css";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("Tất cả");

  const tabs = [
    "Tất cả",
    "Chờ thanh toán",
    "Đang giao",
    "Hoàn thành",
    "Đã hủy",
  ];

  useEffect(() => {
    // Lấy dữ liệu đơn hàng đã lưu từ localStorage
    const savedOrders = JSON.parse(localStorage.getItem("userOrders") || "[]");
    setOrders(savedOrders);
  }, []);

  // Logic lọc đơn hàng theo Tab
  const filteredOrders = orders.filter((order) => {
    if (activeTab === "Tất cả") return true;
    if (activeTab === "Chờ thanh toán") return order.status === "processing";
    if (activeTab === "Đang giao") return order.status === "shipping";
    if (activeTab === "Hoàn thành") return order.status === "completed";
    if (activeTab === "Đã hủy") return order.status === "cancelled";
    return true;
  });

  return (
    <div className="orders-page-container">
      <Header />
      <div className="orders-content">
        <div className="orders-tabs">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={`tab-item ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="orders-list">
          {filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <span className="order-id">Mã đơn: {order.id}</span>
                  <span className="order-status-text">
                    {order.status.toUpperCase()}
                  </span>
                </div>

                {order.items.map((item, i) => (
                  <div className="order-item-row" key={i}>
                    <img src={item.image} alt="" className="item-img-small" />
                    <div className="item-info">
                      <p className="item-name">{item.name}</p>
                      <p className="item-qty">Số lượng: x{item.quantity}</p>
                    </div>
                    <span className="item-price">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </span>
                  </div>
                ))}

                <div className="shipping-tracker">
                  <div className="tracker-title">Lộ trình đơn hàng:</div>
                  {order.tracking.map((step, index) => (
                    <div className="step-row" key={index}>
                      <div className="step-dot-line">
                        <div
                          className={`dot ${index === 0 ? "active" : ""}`}
                        ></div>
                        {index !== order.tracking.length - 1 && (
                          <div className="line"></div>
                        )}
                      </div>
                      <div className="step-content">
                        <p className="step-desc">{step.desc}</p>
                        <p className="step-time">{step.time}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <div className="total-payment">
                    Thành tiền:{" "}
                    <span className="total-val">
                      {order.total.toLocaleString()}đ
                    </span>
                  </div>
                  <div className="order-actions">
                    <button className="btn-track">Liên hệ người bán</button>
                    {order.status === "shipping" && (
                      <button className="btn-main">Đã nhận hàng</button>
                    )}
                    {order.status === "processing" && (
                      <button className="btn-outline-red">Hủy đơn hàng</button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-order">
              <p>Chưa có đơn hàng nào trong mục này.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
