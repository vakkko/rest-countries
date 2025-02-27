import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import "./countryPage.css";

export default function CountryPage() {
  const [currency, setCurrency] = useState("");

  const location = useLocation();
  const countryInfo = location.state;
  const currencies = countryInfo.currencies;
  const laguages = countryInfo.languages;
  const borders = countryInfo.borders;

  useEffect(() => {
    if (location.pathname !== "") {
      document.body.style.backgroundColor = "white";
    }
  }, [location]);

  useEffect(() => {
    for (const prop in currencies) {
      setCurrency(currencies[prop].name);
    }
  }, [currencies]);

  return (
    <div>
      <div className="back-container">
        <div>
          <Link className="back" to={"/"}>
            <img src="images/left-arrow.png" alt="left-arrow" />
            Back
          </Link>
        </div>
      </div>
      <div>
        <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
      </div>
      <div>
        <h1>{countryInfo.name.common}</h1>
        <ul>
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
            {Object.values(laguages).map((lang, index) => (
              <span key={index}>{lang} </span>
            ))}
          </li>
        </ul>
        {borders && (
          <div>
            <span>Border Countries:</span>
            <div>
              {borders.map((country, index) => (
                <span key={index}>{country}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
