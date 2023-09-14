import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/vans/Vans";
import VanDetail from "./pages/vans/VanDetail";
import Layout from "./components/Layout";
import "./server";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/HostVans";
import HostVanDetail from "./pages/host/HostVanDetail";
import Income from "./pages/host/Income";
import Dashboard from "./pages/host/Dashboard";
import HostLayout from "./components/HostLayout";

import HostVanInfo from "./pages/host/HostVanInfo";
import HostVanPhotos from "./pages/host/HostVanPhotos";
import HostVanPricing from "./pages/host/HostVanPricing";

/**
 * Challenge: Add the routes necessary so we can access
 * /host/vans/:id/pricing and /host/vans/:id/photos.
 *
 * Add stubbed-out components in separate files for
 * these routes (e.g. <h2>Pricing view here</h2>). I already
 * made the `HostVanInfo.jsx`, `HostVanPricing.jsx` and
 * `HostVanPhotos.jsx` files for you, but they're empty.
 *
 * Don't forget: you'll need to use a special tool from
 * React Router so we can keep the top info (and
 * eventually the navbar we build) on the page while going
 * from nested route to nested route. This will require some
 * slight changes to HostVanDetail.jsx
 *
 * Since we don't have the navbar yet, you can test them
 * by manually navigating to e.g. /host/vans/1/pricing.
 */

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />

              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
