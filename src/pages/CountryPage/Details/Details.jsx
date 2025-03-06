import "./details.css";

export default function Details({ countryInfo, currency, languages, borders }) {
  return (
    <div>
      <h2>{countryInfo.name.common}</h2>
      <ul className="country-info-list">
        <div>
          <li>
            <span className="description">Native Name:</span>{" "}
            <span>{countryInfo.altSpellings[1]}</span>
          </li>
          <li>
            <span className="description">Population:</span>{" "}
            <span>{countryInfo.population}</span>
          </li>
          <li>
            <span className="description">Region:</span>{" "}
            <span>{countryInfo.region}</span>
          </li>
          <li>
            <span className="description">Sub Region:</span>{" "}
            <span>{countryInfo.subregion}</span>
          </li>
          <li>
            <span className="description">Capital:</span>{" "}
            <span>{countryInfo.capital[0]}</span>
          </li>
        </div>
        <div>
          <li>
            <span className="description">Top Level Domain:</span>{" "}
            <span>{countryInfo.tld[0]}</span>
          </li>
          <li>
            <span className="description">Currencies:</span>{" "}
            <span>{currency}</span>
          </li>
          <li>
            <span className="description">Languages:</span>{" "}
            {Object.values(languages).map((lang, index) => (
              <span key={index}>{lang} </span>
            ))}
          </li>
        </div>
      </ul>
      {borders && (
        <div className="border-countries">
          <h2>Border Countries:</h2>
          <div>
            {borders.map((country, index) => (
              <p key={index}>{country}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
