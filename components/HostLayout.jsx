import { Link, NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const styleActive = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };
  return (
    <>
      <nav className="host-nav">
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : null)}
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : null)}
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : null)}
          to="/host/vans"
        >
          Vans
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? styleActive : null)}
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}
