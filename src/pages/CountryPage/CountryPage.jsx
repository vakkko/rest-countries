import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./countryPage.css";

export default function CountryPage() {
  const [currency, setCurrency] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const countryInfo = location.state;
  const currencies = countryInfo.currencies;
  const laguages = countryInfo.languages;
  const borders = countryInfo.borders;
  useEffect(() => {
    for (const prop in currencies) {
      setCurrency(currencies[prop].name);
    }
  }, [currencies]);

  return (
    <div className="country-page">
      <div className="back-container">
        <button onClick={() => navigate(-1)} className="btn-back">
          <svg
            fill="#000000"
            width="13px"
            height="13px"
            viewBox="0 0 476.213 476.213"
            xmlns="http://www.w3.org/2000/svg"
          >
            <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107" />
          </svg>
          Back
        </button>
      </div>
      <div className="flag-container">
        <img src={countryInfo.flags.png} alt={countryInfo.flags.alt} />
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
                {Object.values(laguages).map((lang, index) => (
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
      </div>
    </div>
  );
}
