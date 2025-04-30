import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function PublicRoute({ children }) {
  const { token } = useUser();

  if (token) {
    return <Navigate to="/" replace />;
  }

  return children;
}
