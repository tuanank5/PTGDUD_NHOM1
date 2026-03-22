import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/Login';
import Footer from './components/Footer'; 

function App() {

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
  ];

  return (
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
  );
}

export default App;