import "./continentsList.css";

export default function ContinentsList({
  showContinents,

  setShowContinents,
}) {
  const handleRegionClick = (region) => {
    setShowContinents(!showContinents);
  };
  return (
    showContinents && (
      <ul className="regions">
        <li className={`region `} onClick={() => handleRegionClick("Africa")}>
          Africa
        </li>
        <li className={`region `} onClick={() => handleRegionClick("Americas")}>
          Americas
        </li>
        <li className={`region `} onClick={() => handleRegionClick("Asia")}>
          Asia
        </li>
        <li className={`region `} onClick={() => handleRegionClick("Europe")}>
          Europe
        </li>
        <li className={`region `} onClick={() => handleRegionClick("Oceania")}>
          Oceania
        </li>
        <li className={`region `} onClick={() => handleRegionClick("")}>
          All
        </li>
      </ul>
    )
  );
}
