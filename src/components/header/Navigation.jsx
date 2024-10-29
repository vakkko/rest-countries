import { useState } from "react";
import "./navigation.css";

export default function Navigation({
  setSelectedRegion,
  searchCountry,
  setSearchCountry,
  selectedRegion,
}) {
  const [showContinents, setShowContinents] = useState(false);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
  };

  const handleInputChange = (event) => {
    setSearchCountry(event.target.value);
  };

  return (
    <nav className="country-navigation">
      <input
        onChange={handleInputChange}
        type="text"
        value={searchCountry}
        placeholder="Search for a country…"
      />
      <div>
        <p
          onClick={() => setShowContinents(!showContinents)}
          className="filter"
        >
          Filter by Region
        </p>
        {showContinents && (
          <ul className="regions">
            <li
              className={`region ${
                selectedRegion === `Africa` ? `active` : ``
              }`}
              onClick={() => handleRegionClick("Africa")}
            >
              Africa
            </li>
            <li
              className={`region ${
                selectedRegion === `Americas` ? `active` : ``
              }`}
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
              className={`region ${
                selectedRegion === `Europe` ? `active` : ``
              }`}
              onClick={() => handleRegionClick("Europe")}
            >
              Europe
            </li>
            <li
              className={`region ${
                selectedRegion === `Oceania` ? `active` : ``
              }`}
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
        )}
      </div>
    </nav>
  );
}
