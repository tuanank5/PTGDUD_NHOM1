import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { FavoritesProvider } from "./context/FavoritesContext"; // Đảm bảo đúng đường dẫn

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* QUAN TRỌNG: Phải bọc FavoritesProvider ở đây */}
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </React.StrictMode>
);