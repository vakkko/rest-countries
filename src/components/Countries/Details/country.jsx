import "./country.css";
import { Link } from "react-router";

export default function Country({ country, i }) {
  return (
    <div key={i}>
      <Link to={country.name.common} state={country}>
        <img src={country.flags.png} alt="flag" />
        <div className="country-information">
          <p className="country">{country.name.common}</p>
          <ul>
            <li>
              <span className="info">Population: </span>
              {country.population}
            </li>
            <li>
              <span className="info">Region: </span>
              {country.region}
            </li>
            <li>
              <span className="info">Capital: </span> {country.capital}
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
}
