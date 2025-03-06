import "./continentsList.css";

export default function ContinentsList({
  showContinents,
  setSelectedRegion,
  setShowContinents,
  selectedRegion,
}) {
  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setShowContinents(!showContinents);
  };
  return (
    showContinents && (
      <ul className="regions">
        <li
          className={`region ${selectedRegion === `Africa` ? `active` : ``}`}
          onClick={() => handleRegionClick("Africa")}
        >
          Africa
        </li>
        <li
          className={`region ${selectedRegion === `Americas` ? `active` : ``}`}
          onClick={() => handleRegionClick("Americas")}
        >
          Americas
        </li>
        <li
          className={`region ${selectedRegion === `Asia` ? `active` : ``}`}
          onClick={() => handleRegionClick("Asia")}
        >
          Asia
        </li>
        <li
          className={`region ${selectedRegion === `Europe` ? `active` : ``}`}
          onClick={() => handleRegionClick("Europe")}
        >
          Europe
        </li>
        <li
          className={`region ${selectedRegion === `Oceania` ? `active` : ``}`}
          onClick={() => handleRegionClick("Oceania")}
        >
          Oceania
        </li>
        <li
          className={`region ${selectedRegion === `` ? `active` : ``}`}
          onClick={() => handleRegionClick("")}
        >
          All
        </li>
      </ul>
    )
  );
}
