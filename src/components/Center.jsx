import React from "react";

const Center = ({ children }) => {
  return (
    <div style={{ padding: "24px", background: "#fff", borderRadius: "8px", minHeight: "400px", boxShadow: "0 2px 8px rgba(0,0,0,0.05)" }}>
      {children}
    </div>
  );
};

export default Center;
