import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/CartDrawer.css";

export default function CartDrawer({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const {
    cart,
    removeFromCart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const handleGoToCheckout = () => {
    if (!user) {
      const confirmed = window.confirm(
        "Bạn cần đăng nhập để tiến hành thanh toán!\nBấm OK để đến trang đăng nhập.",
      );
      if (confirmed) {
        onClose();
        navigate("/login");
      }
      return;
    }
    onClose();
    navigate("/checkout");
  };
  return (
    <>
      {isOpen && <div className="cd-overlay" onClick={onClose} />}

      <div className={`cd-drawer ${isOpen ? "cd-open" : ""}`}>
        <div className="cd-header">
          <span className="cd-title">GIỎ HÀNG CỦA BẠN</span>
          <button className="cd-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cd-body">
          {cart.length === 0 ? (
            <div className="cd-empty">
              <p>🛒 Giỏ hàng trống</p>
              <span>Hãy thêm sản phẩm vào giỏ hàng</span>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cd-item" key={item.id}>
                <img src={item.image} alt={item.name} className="cd-item-img" />
                <div className="cd-item-info">
                  <p className="cd-item-name">{item.name}</p>
                  <div className="cd-quantity">
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  </div>
                  <p className="cd-item-price">
                    {typeof item.price === "number"
                      ? item.price.toLocaleString("vi-VN") + "đ"
                      : item.price}
                  </p>
                </div>
                <button
                  className="cd-item-remove"
                  onClick={() => removeFromCart(item.id)}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cd-footer">
            <div className="cd-total">
              <span>TỔNG TIỀN:</span>
              <strong>{totalPrice.toLocaleString("vi-VN")}đ</strong>
            </div>
            <button className="cd-checkout" onClick={handleGoToCheckout}>
              THANH TOÁN
            </button>
          </div>
        )}
      </div>
    </>
  );
}
