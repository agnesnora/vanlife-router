import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HostVanDetail() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <section>
        <Link to="../." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>

        <div className="host-van-detail-layout-container">
          <div className="host-van-detail">
            <img src={currentVan.imageUrl} />
            <div className="host-van-detail-info-text">
              <i className={`van-type van-type-${currentVan.type}`}>
                {currentVan.type}
              </i>
              <h3>{currentVan.name}</h3>
              <h4>${currentVan.price}/day</h4>
            </div>
          </div>
          <nav>
            <NavLink
              className={({ isActive }) => (isActive ? "active--link" : "")}
              end
              to="."
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active--link" : "")}
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active--link" : "")}
              to="photos"
            >
              Photos
            </NavLink>
          </nav>
          <Outlet />
        </div>
      </section>
    </>
  );
}
