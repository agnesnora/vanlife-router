import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="main--container">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}
