import "../../server";
import { useState, useEffect } from "react";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) =>
        setHostVans(data.vans.filter((van) => van.hostId === "123"))
      );
  }, []);

  const hostedVanElement = hostVans.map((van) => (
    <div className="hosted--van--list">
      <img src={van.imageUrl} />
      <div>
        <h4>{van.name}</h4> <p>${van.price}/day</p>
      </div>
    </div>
  ));
  return (
    <>
      {" "}
      <div className="hosted--van--container">
        <h1>Your listed vans</h1>
        {hostedVanElement}
      </div>
    </>
  );
}
