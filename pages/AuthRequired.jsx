import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
  const auth = true;
  if (!auth) {
    return (
      <Navigate to="/login" state={{ message: "You must be logged in" }} />
    );
  }
  return <Outlet />;
}
