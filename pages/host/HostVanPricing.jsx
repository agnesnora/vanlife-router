import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const [currentVan, setCurrentVan] = useOutletContext();
  return (
    <>
      <p>
        <strong>${currentVan.price}</strong>/day
      </p>
    </>
  );
}
