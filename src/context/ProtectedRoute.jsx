import { useContext } from "react";
import NotFound from "../components/NotFound";
import { AuthContext } from "./AuthContext";

export default function ProtectedRoute({ children, allowRoles }) {
  const { user } = useContext(AuthContext);

  const role = user?.role || "guest";

  const canAccess = (role, allowRoles) => {
    if (role === "user" && allowRoles.includes("guest")) return true;

    return allowRoles.includes(role);
  };

  if (allowRoles && !canAccess(role, allowRoles)) {
    return <NotFound />;
  }

  return children;
}
