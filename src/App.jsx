import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/Login';

function App() {

  const routes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((r, i) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
