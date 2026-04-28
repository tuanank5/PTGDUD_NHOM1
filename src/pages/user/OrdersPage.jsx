import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import "../../styles/OrdersPage.css";
import { getOrdersByUser, updateOrder } from "../../api/orderAPI";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const [loading, setLoading] = useState(true);
  
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState("");

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const tabs = ["Tất cả", "Đã đặt", "Đã hủy"];

  useEffect(() => {
    if (!user) return;
    getOrdersByUser(user.id)
      .then((data) => {
        const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setOrders(sorted);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  const openContact = (orderId) => {
    setSelectedOrderId(orderId);
    setShowContactModal(true);
  };

  const handleCancelOrder = async (orderId) => {
    await updateOrder(orderId, { status: "cancelled" });
    setOrders((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status: "cancelled" } : o))
    );
  };

  const filteredOrders = orders.filter((order) => {
    if (activeTab === "Tất cả") return true;
    if (activeTab === "Đã đặt") return order.status !== "cancelled";
    if (activeTab === "Đã hủy") return order.status === "cancelled";
    return true;
  });

  return (
    <div className="orders-page-container">
      <Header />
      <div className="orders-content">
        <div className="orders-tabs">
          <div className="tab-item home-tab" onClick={() => navigate("/")}>🏠 Trang chủ</div>
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
          {loading ? (
            <div className="no-order"><p>Đang tải đơn hàng...</p></div>
          ) : filteredOrders.length > 0 ? (
            filteredOrders.map((order) => (
              <div className="order-card" key={order.id}>
                <div className="order-header">
                  <span className="order-id">Mã đơn: #{order.id}</span>
                  <span className="order-status-text" style={{ color: order.status === "cancelled" ? "#e53935" : "#2e7d32" }}>
                    {order.status === "processing" && "Đã đặt hàng"}
                    {order.status === "shipping" && "Đang giao"}
                    {order.status === "completed" && "Hoàn thành"}
                    {order.status === "cancelled" && "Đã hủy"}
                  </span>
                </div>

                {order.items.map((item, i) => (
                  <div className="order-item-row" key={i}>
                    <img src={item.image} alt="" className="item-img-small" />
                    <div className="item-info">
                      <p className="item-name">{item.name}</p>
                      <p className="item-qty">Số lượng: x{item.quantity}</p>
                    </div>
                    <span className="item-price">{(item.price * item.quantity).toLocaleString()}đ</span>
                  </div>
                ))}

                <div className="shipping-tracker">
                  <div className="tracker-title">Lộ trình đơn hàng:</div>
                  {order.tracking?.map((step, index) => (
                    <div className="step-row" key={index}>
                      <div className="step-dot-line">
                        <div className={`dot ${index === 0 ? "active" : ""}`}></div>
                        {index !== order.tracking.length - 1 && <div className="line"></div>}
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
                    Thành tiền: <span className="total-val">{order.total.toLocaleString()}đ</span>
                  </div>
                  <div className="order-actions">
                    <button className="btn-track" onClick={() => openContact(order.id)}>💬 Liên hệ người bán</button>
                    {order.status === "processing" && (
                      <button className="btn-outline-red" onClick={() => handleCancelOrder(order.id)}>Hủy đơn hàng</button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-order"><p>Chưa có đơn hàng nào.</p></div>
          )}
        </div>
      </div>

      {showContactModal && (
        <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
          <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
            <h3>Trung tâm hỗ trợ</h3>
            <p className="contact-subtitle">Bạn đang cần hỗ trợ cho đơn hàng <strong>#{selectedOrderId}</strong>?</p>
            
            <div className="contact-methods">
              <a href={`https://zalo.me/0123456789?text=${encodeURIComponent("Chào shop, mình cần hỗ trợ đơn hàng #" + selectedOrderId)}`} target="_blank" className="contact-link">
                <span className="contact-icon">💬</span>
                <div className="contact-text">
                  <strong>Chat qua Zalo(0123456789)</strong>
                  <span>Phản hồi nhanh trong 5 phút</span>
                </div>
              </a>

              <a href="tel:0123456789" className="contact-link">
                <span className="contact-icon">📞</span>
                <div className="contact-text">
                  <strong>Gọi hotline</strong>
                  <span>0123.456.789 (8h00 - 22h00)</span>
                </div>
              </a>
            </div>

            <button className="btn-close-contact" onClick={() => setShowContactModal(false)}>Để sau</button>
          </div>
        </div>
      )}
    </div>
  );
}