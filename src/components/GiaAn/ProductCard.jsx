export default function ProductCard({ product, onAddToCart }) {
  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 10,
        transition: "0.3s",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        background: "#fff",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";

        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.1)";

        const img = e.currentTarget.querySelector("img");
        if (img) img.style.transform = "scale(1)";
      }}
    >
      <div
        style={{
          width: "100%",
          height: 180,
          overflow: "hidden",
          borderRadius: 10
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.3s"
          }}
        />
      </div>

      <h3 style={{ margin: "10px 0 5px" }}>
        {product.name}
      </h3>

      <p style={{ fontSize: 14, color: "#555" }}>
        Số lượng: {product.quantity}
      </p>

      <p
        style={{
          color: "red",
          fontWeight: "bold",
          fontSize: 16,
          margin: "5px 0"
        }}
      >
        {product.price.toLocaleString()}đ
      </p>

      <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <button
          style={{
            flex: 1,
            background: "orange",
            color: "#fff",
            border: "none",
            padding: 10,
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold"
          }}
          onClick={() => alert("Mua ngay: " + product.name)}
        >
          Mua ngay
        </button>

        <button
          style={{
            flex: 1,
            background: "#333",
            color: "#fff",
            border: "none",
            padding: 10,
            borderRadius: 6,
            cursor: "pointer",
            fontWeight: "bold"
          }}
          onClick={() => onAddToCart(product)}
        >
          + Giỏ
        </button>
      </div>
    </div>
  );
}