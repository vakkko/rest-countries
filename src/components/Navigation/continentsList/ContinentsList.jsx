import { useContext } from "react";
import "./continentsList.css";
import { SearchContext } from "../../../context/context";
import { Link } from "react-router";

export default function ContinentsList({ showContinents, setShowContinents }) {
  const handleRegionClick = (region) => {
    setShowContinents(!showContinents);
    setSearchRegion(region);
  };

  const region = useContext(SearchContext);
  const setSearchRegion = region.setSearchRegion;
  const searchRegion = region.searchRegion;
  return (
    showContinents && (
      <ul className="regions">
        <li
          className={`region ${searchRegion === "Africa" ? "active" : ""} `}
          onClick={() => handleRegionClick("Africa")}
        >
          <Link to={"1"}>Africa</Link>
        </li>
        <li
          className={`region ${searchRegion === "Americas" ? "active" : ""}  `}
          onClick={() => handleRegionClick("Americas")}
        >
          <Link to={"1"}>Americas</Link>
        </li>
        <li
          className={`region ${searchRegion === "Asia" ? "active" : ""} `}
          onClick={() => handleRegionClick("Asia")}
        >
          <Link to={"1"}>Asia</Link>
        </li>
        <li
          className={`region ${searchRegion === "Europe" ? "active" : ""} `}
          onClick={() => handleRegionClick("Europe")}
        >
          <Link to={"1"}>Europe</Link>
        </li>
        <li
          className={`region ${searchRegion === "Oceania" ? "active" : ""} `}
          onClick={() => handleRegionClick("Oceania")}
        >
          <Link to={"1"}>Oceania</Link>
        </li>
        <li
          className={`region ${searchRegion === "" ? "active" : ""} `}
          onClick={() => handleRegionClick("")}
        >
          All
        </li>
      </ul>
    )
  );
}
