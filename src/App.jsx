import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import { AppProviders } from "./context/AppProvider";
import ProtectedRoute from "./context/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import UserForm from "./pages/admin/UserForm";
import OrdersManager from "./pages/admin/OrdersManager";
import UsersManager from "./pages/admin/UsersManager";
import AboutUs from "./pages/user/AboutUs";
import CheckoutPage from "./pages/user/CheckoutPage";
import FavoritesPage from "./pages/user/FavoritesPage";
import Home from "./pages/user/Home";
import OrdersPage from "./pages/user/OrdersPage";
import ProductList from "./pages/user/ProductList";

function App() {
  const routes = [
    //guest: Chưa đăng nhập
    {
      path: "/",
      element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <Home />
        </ProtectedRoute>
      ),
    },
    {
      path: "/login",
      element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <Login />
        </ProtectedRoute>
      ),
    },
    {
      path: "/products",
      element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <ProductList />
        </ProtectedRoute>
      ),
    },
    {
      path: "/about",
      element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <AboutUs />
        </ProtectedRoute>
      ),
    },
    {
      path: "/favorites",
      element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <FavoritesPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/orders",
      element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <OrdersPage />
        </ProtectedRoute>
      ),
    },
    //user: Đăng nhập với user.role == user
    {
      path: "/checkout",
      element: (
        <ProtectedRoute allowRoles={["user"]}>
          <CheckoutPage />
        </ProtectedRoute>
      ),
    },
    //admin: Đăng nhập với user.role == admin
    {
      path: "/admin/dashboard",
      element: (
        <ProtectedRoute allowRoles={["admin"]}>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/products",
      element: (
        <ProtectedRoute allowRoles={["admin"]}>
          <ProductForm />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/orders",
      element: (
        <ProtectedRoute allowRoles={["admin"]}>
          <OrdersManager />
        </ProtectedRoute>
      ),
    },
    {
      path: "/admin/users",
      element: (
        <ProtectedRoute allowRoles={["admin"]}>
          <UsersManager />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <NotFound /> },
  ];

  return (
    <AppProviders>
      <BrowserRouter>
        <div className="app-container">
          <div className="main-content">
            <Routes>
              {routes.map((r) => (
                <Route key={r.path} path={r.path} element={r.element} />
              ))}
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </AppProviders>
  );
}

export default App;
