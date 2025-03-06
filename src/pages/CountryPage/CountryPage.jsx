import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./countryPage.css";
import Details from "./Details/Details";

export default function CountryPage() {
  const [currency, setCurrency] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const countryInfo = location.state;
  const currencies = countryInfo.currencies;
  const languages = countryInfo.languages;
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
        <Details
          countryInfo={countryInfo}
          currency={currency}
          languages={languages}
          borders={borders}
        />
      </div>
    </div>
  );
}
