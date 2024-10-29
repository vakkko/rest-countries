export default function FetchCountries({ reg, i }) {
    return (
      <div key={i}>
        <img src={reg.flags.png} alt="flag" />
        <div className="country-information">
          <p className="country">{reg.name.common}</p>
          <ul>
            <li>
              <span className="info">Population: </span>
              {reg.population}
            </li>
            <li>
              <span className="info">Region: </span>
              {reg.region}
            </li>
            <li>
              <span className="info">Capital: </span> {reg.capital}
            </li>
          </ul>
        </div>
      </div>
    );
  }