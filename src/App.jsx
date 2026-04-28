import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/user/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import ProductForm from './pages/admin/ProductForm';
import CheckoutPage from './pages/user/CheckoutPage';
import OrdersPage from './pages/user/OrdersPage';
import ProductList from './pages/user/ProductList';
import ProtectedRoute from './context/ProtectedRoute';
import FavoritesPage from "./pages/user/FavoritesPage";
import AboutUs from './pages/user/AboutUs';
import { AppProviders } from './context/AppProvider';
import { useEffect, useState } from 'react';
import { getProducts } from './api/productsAPI';
import Dashboard from './pages/admin/Dashboard';
import NotFound from './components/NotFound';
import UserForm from './pages/admin/UserForm';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

    const routes = [
      //guest: Chưa đăng nhập
      { path: "/", element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <Home />
        </ProtectedRoute>
      ) },
      { path: "/login", element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <Login />
        </ProtectedRoute>
      ) },
      { path: "/products", element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <ProductList />
        </ProtectedRoute>
      ) },
      { path: "/about", element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <AboutUs />
        </ProtectedRoute>
      ) },
      { path: "/favorites", element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <FavoritesPage />
        </ProtectedRoute>
      ) },
      { path: "/orders", element: (
        <ProtectedRoute allowRoles={["guest"]}>
          <OrdersPage />
        </ProtectedRoute>
      ) },
      //user: Đăng nhập với user.role == user
      { path: "/checkout", element: (
        <ProtectedRoute allowRoles={["user"]}>
          <CheckoutPage />
        </ProtectedRoute>
      ) },
      //admin: Đăng nhập với user.role == admin
      { path: "/admin/dashboard", element: (
        <ProtectedRoute allowRoles={["admin"]}>
          <Dashboard />
        </ProtectedRoute>
      ) },
      { path: "/admin/products", element: (
        <ProtectedRoute allowRoles={["admin"]}>
          <ProductForm />
        </ProtectedRoute>
      ) },
      { path: "/admin/users", element: (
        <ProtectedRoute allowRoles={["admin"]}>
          <UserForm />
        </ProtectedRoute>
      ) },
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