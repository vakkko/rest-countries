import { useContext, useState } from "react";
import "./navigation.css";
import ContinentsList from "./continentsList/ContinentsList";
import { SearchContext } from "../../context/context";
import { useParams } from "react-router";

export default function Navigation() {
  const [showContinents, setShowContinents] = useState(false);

  const search = useContext(SearchContext);
  const { searchCountry, setSearchCountry } = search;
  const params = useParams();

  const handleChange = (e) => {
    setSearchCountry(e.target.value);
  };

  return (
    !params.country && (
      <>
        <nav className="country-navigation">
          <input
            type="text"
            placeholder="Search for a country…"
            value={searchCountry}
            onChange={handleChange}
          />
          <button onClick={() => setSearchCountry("")} className="clear-btn">
            clear
          </button>
          <div>
            <div
              onClick={() => setShowContinents(!showContinents)}
              className="filter-container"
            >
              <button className="filter">Filter by Region</button>
              <svg
                fill="#000000"
                height="5px"
                width="9px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 330 330"
              >
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
              c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
              s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
              </svg>
            </div>
            <ContinentsList
              setShowContinents={setShowContinents}
              showContinents={showContinents}
            />
          </div>
        </nav>
      </>
    )
  );
}
