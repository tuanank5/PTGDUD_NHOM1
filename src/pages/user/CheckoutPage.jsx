import { useEffect, useState, useContext } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { createOrder } from "../../api/orderAPI";
import "../../styles/CheckoutPage.css";

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    province: "",
    district: "",
    ward: "",
    addressDetail: "",
    note: "",
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [shippingMethod, setShippingMethod] = useState("saving");
  const [shippingFee, setShippingFee] = useState(30000);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/?depth=1")
      .then((res) => res.json())
      .then((data) => setProvinces(data));
  }, []);

  const handleProvinceChange = (e) => {
    const code = e.target.value;
    const province = provinces.find((p) => p.code == code);
    setFormData({
      ...formData,
      province: province?.name || "",
      district: "",
      ward: "",
    });

    if (province?.name !== "Thành phố Hồ Chí Minh") {
      setShippingMethod("saving");
      setShippingFee(30000);
    }
    setDistricts([]);
    setWards([]);
    if (code) {
      fetch(`https://provinces.open-api.vn/api/p/${code}?depth=2`)
        .then((res) => res.json())
        .then((data) => setDistricts(data.districts));
    }
  };

  const handleDistrictChange = (e) => {
    const code = e.target.value;
    const district = districts.find((d) => d.code == code);
    setFormData({ ...formData, district: district?.name || "", ward: "" });
    setWards([]);
    if (code) {
      fetch(`https://provinces.open-api.vn/api/d/${code}?depth=2`)
        .then((res) => res.json())
        .then((data) => setWards(data.wards));
    }
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "GIAM10") {
      setDiscount(totalPrice * 0.1);
      alert("Áp dụng mã giảm giá thành công!");
    } else {
      alert("Mã giảm giá không hợp lệ");
    }
  };

  const handleFinalCheckout = async () => {
    if (
      !formData.fullName.trim() ||
      !formData.phone.trim() ||
      !formData.province ||
      !formData.ward
    ) {
      return alert("Bạn vui lòng điền đầy đủ các thông tin bắt buộc (*)");
    }

    const newOrder = {
      userId: user.id, 
      status: "processing",
      total: totalPrice + shippingFee - discount,
      items: [...cart],
      shippingInfo: {
        fullName: formData.fullName,
        phone: formData.phone,
        address: `${formData.addressDetail}, ${formData.ward}, ${formData.district}, ${formData.province}`,
        note: formData.note,
      },
      shippingMethod,
      paymentMethod,
      createdAt: new Date().toISOString(), // ← dùng để sort
      tracking: [
        {
          time: new Date().toLocaleString("vi-VN"),
          desc: "Đơn hàng đã được đặt thành công",
        },
      ],
    };

    try {
      await createOrder(newOrder); // ← lưu vào db.json
      clearCart();
      setShowSuccessModal(true);
    } catch (error) {
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  // ... phần return giữ nguyên hoàn toàn
  return (
    <div className="checkout-page-container">
      <Header />
      <div className="checkout-main-content">
        <div className="checkout-layout-grid">
          <div className="info-column">
            <div className="card-box">
              <div className="back-button" onClick={() => navigate(-1)}>
                ← Quay lại
              </div>
              <h2 className="section-title">1. THÔNG TIN GIAO HÀNG</h2>
              <div className="input-row-flex">
                <div className="input-item">
                  <label className="all-labels">Họ và tên (*)</label>
                  <input
                    type="text"
                    placeholder="Nhập tên khách hàng"
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                  />
                </div>
                <div className="input-item">
                  <label className="all-labels">Số điện thoại (*)</label>
                  <input
                    type="tel"
                    placeholder="Ví dụ: 0123456789"
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="address-select-grid">
                <div className="input-item">
                  <label className="all-labels">Tỉnh / Thành phố (*)</label>
                  <select onChange={handleProvinceChange}>
                    <option value="">Chọn Tỉnh/Thành</option>
                    {provinces.map((p) => (
                      <option key={p.code} value={p.code}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-item">
                  <label className="all-labels">Quận / Huyện (*)</label>
                  <select onChange={handleDistrictChange}>
                    <option value="">Chọn Quận/Huyện</option>
                    {districts.map((d) => (
                      <option key={d.code} value={d.code}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-item">
                  <label className="all-labels">Phường / Xã (*)</label>
                  <select
                    onChange={(e) =>
                      setFormData({ ...formData, ward: e.target.value })
                    }
                  >
                    <option value="">Chọn Phường/Xã</option>
                    {wards.map((w) => (
                      <option key={w.code} value={w.name}>
                        {w.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div
                className="input-item full-width"
                style={{ marginBottom: "20px" }}
              >
                <label className="all-labels">Địa chỉ chi tiết</label>
                <input
                  type="text"
                  placeholder="Số nhà, tên đường... (Không bắt buộc)"
                  onChange={(e) =>
                    setFormData({ ...formData, addressDetail: e.target.value })
                  }
                />
              </div>

              <div className="input-item full-width">
                <label className="all-labels">Ghi chú đơn hàng</label>
                <textarea
                  rows="3"
                  placeholder="Ghi chú yêu cầu đặc biệt cho đơn hàng của bạn..."
                  onChange={(e) =>
                    setFormData({ ...formData, note: e.target.value })
                  }
                ></textarea>
              </div>

              <h2 className="section-title" style={{ marginTop: "40px" }}>
                2. VẬN CHUYỂN & THANH TOÁN
              </h2>
              <div className="method-selection-container">
                <div className="method-column">
                  <h4 className="all-labels">Vận chuyển (*)</h4>
                  <div
                    className={`selection-card ${shippingMethod === "saving" ? "active" : ""}`}
                    onClick={() => {
                      setShippingMethod("saving");
                      setShippingFee(30000);
                    }}
                  >
                    <input
                      type="radio"
                      checked={shippingMethod === "saving"}
                      readOnly
                    />
                    <div className="card-text">
                      <p className="main-text">Tiêu chuẩn</p>
                      <p className="sub-text">3 - 5 ngày làm việc</p>
                    </div>
                    <span className="method-price">30.000đ</span>
                  </div>

                  {formData.province === "Thành phố Hồ Chí Minh" && (
                    <div
                      className={`selection-card ${shippingMethod === "express" ? "active" : ""}`}
                      onClick={() => {
                        setShippingMethod("express");
                        setShippingFee(100000);
                      }}
                    >
                      <input
                        type="radio"
                        checked={shippingMethod === "express"}
                        readOnly
                      />
                      <div className="card-text">
                        <p className="main-text">Hỏa tốc (HCM)</p>
                        <p className="sub-text">Giao ngay trong ngày</p>
                      </div>
                      <span className="method-price">100.000đ</span>
                    </div>
                  )}
                </div>

                <div className="method-column">
                  <h4 className="all-labels">Thanh toán (*)</h4>
                  <div
                    className={`selection-card ${paymentMethod === "cod" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("cod")}
                  >
                    <input
                      type="radio"
                      checked={paymentMethod === "cod"}
                      readOnly
                    />
                    <div className="card-text">
                      <p className="main-text">Tiền mặt (COD)</p>
                      <p className="sub-text">Thanh toán khi nhận</p>
                    </div>
                  </div>
                  <div
                    className={`selection-card ${paymentMethod === "bank" ? "active" : ""}`}
                    onClick={() => setPaymentMethod("bank")}
                  >
                    <input
                      type="radio"
                      checked={paymentMethod === "bank"}
                      readOnly
                    />
                    <div className="card-text">
                      <p className="main-text">Chuyển khoản</p>
                      <p className="sub-text">Qua app Ngân hàng</p>
                    </div>
                  </div>
                </div>
              </div>

              {paymentMethod === "bank" && (
                <div className="bank-transfer-info">
                  <p className="bank-card-title">Thông tin chuyển khoản:</p>
                  <div className="bank-card">
                    <p>
                      Ngân hàng: <strong>MB BANK</strong>
                    </p>
                    <p>
                      Số tài khoản: <strong>0123 4567 8999</strong>
                    </p>
                    <p>
                      Chủ tài khoản: <strong>NGUYEN VAN A</strong>
                    </p>
                    <p>
                      Nội dung:{" "}
                      <strong>{formData.phone || "Thanh toan don hang"}</strong>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="summary-column">
            <div className="order-box">
              <h2 className="section-title">ĐƠN HÀNG CỦA BẠN</h2>
              <div className="item-preview-container">
                {cart.map((item) => (
                  <div className="item-row-preview" key={item.id}>
                    <img src={item.image} alt="" className="item-img" />
                    <div className="item-text">
                      <p className="item-name">{item.name}</p>
                      <span className="item-qty">
                        Số lượng: {item.quantity}
                      </span>
                    </div>
                    <span className="price-tag">
                      {(item.price * item.quantity).toLocaleString()}đ
                    </span>
                  </div>
                ))}
              </div>

              <div className="promo-section">
                <input
                  type="text"
                  placeholder="Mã giảm giá"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                />
                <button onClick={handleApplyPromo}>ÁP DỤNG</button>
              </div>

              <div className="final-price-calc">
                <div className="calc-row">
                  <span className="label">Tạm tính</span>
                  <span className="val">{totalPrice.toLocaleString()}đ</span>
                </div>
                <div className="calc-row">
                  <span className="label">Phí vận chuyển</span>
                  <span className="val">{shippingFee.toLocaleString()}đ</span>
                </div>
                <div className="calc-row discount-text">
                  <span className="label">Giảm giá</span>
                  <span className="val">-{discount.toLocaleString()}đ</span>
                </div>
                <div className="total-row-separator"></div>
                <div className="total-row">
                  <span className="total-label">TỔNG CỘNG</span>
                  <span className="total-val">
                    {(totalPrice + shippingFee - discount).toLocaleString()}đ
                  </span>
                </div>
              </div>
              <button
                className="final-checkout-btn"
                onClick={handleFinalCheckout}
              >
                THANH TOÁN
              </button>
            </div>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="success-modal">
            <div className="success-icon-wrap">
              <div className="success-circle">
                <span className="check-mark">✓</span>
              </div>
            </div>
            <h2 className="modal-title">Cảm ơn bạn đã đặt hàng!</h2>
            <p className="modal-desc">
              Đơn hàng của bạn đã được xác nhận thành công.
            </p>
            <div className="modal-actions">
              <button
                className="btn-outline"
                onClick={() => (window.location.href = "/orders")}
              >
                ĐƠN HÀNG CỦA BẠN
              </button>
              <button
                className="btn-primary"
                onClick={() => (window.location.href = "/")}
              >
                TIẾP TỤC MUA SẮM
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
