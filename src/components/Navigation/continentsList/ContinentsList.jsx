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
          <Link to={"/"}>Africa</Link>
        </li>
        <li
          className={`region ${searchRegion === "Americas" ? "active" : ""}  `}
          onClick={() => handleRegionClick("Americas")}
        >
          <Link to={"/"}>Americas</Link>
        </li>
        <li
          className={`region ${searchRegion === "Asia" ? "active" : ""} `}
          onClick={() => handleRegionClick("Asia")}
        >
          <Link to={"/"}>Asia</Link>
        </li>
        <li
          className={`region ${searchRegion === "Europe" ? "active" : ""} `}
          onClick={() => handleRegionClick("Europe")}
        >
          <Link to={"/"}>Europe</Link>
        </li>
        <li
          className={`region ${searchRegion === "Oceania" ? "active" : ""} `}
          onClick={() => handleRegionClick("Oceania")}
        >
          <Link to={"/"}>Oceania</Link>
        </li>
        <li
          className={`region ${searchRegion === "" ? "active" : ""} `}
          onClick={() => handleRegionClick("")}
        >
          <Link to={"/"}>All </Link>
        </li>
      </ul>
    )
  );
}
