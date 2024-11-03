import useSWR from "swr";
import "./countries.css";
import { useState } from "react";
import FetchCountries from "./FetchCountries/components/FetchCountries";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Countries = ({ selectedRegion, searchCountry }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: countries,
    error,
    isValidating,
  } = useSWR("https://restcountries.com/v3.1/all", fetcher);

  if (error) return <div className="failed">Failed to load</div>;
  if (isValidating) return <div className="loading">Loading...</div>;

  const countryPerPage = 16;
  const lastIndex = currentPage * countryPerPage;
  const firstIndex = lastIndex - countryPerPage;
  const npage = Math.ceil(countries.length / countryPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function nextPage() {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prePage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changePage(id) {
    setCurrentPage(id);
  }

  const sortedCountries = countries
    ? countries
        .filter((country) =>
          selectedRegion
            ? selectedRegion === country.region
            : searchCountry
            ? country.name.common
                .toLowerCase()
                .includes(searchCountry.toLowerCase())
            : true
        )
        .sort((a, b) => a.name.common.localeCompare(b.name.common))
    : [];

  const currentCountries = sortedCountries.slice(firstIndex, lastIndex);

  return (
    <>
      <main className="countries-container">
        {currentCountries.map((country, index) => (
          <FetchCountries key={index} reg={country} i={index} />
        ))}
      </main>

      {sortedCountries.length > countryPerPage && (
        <footer>
          <nav className="footer-navigation">
            <ul>
              <li onClick={prePage}>
                <button>Prev</button>
              </li>

              {numbers.map((n) => (
                <li
                  className={`onPage ${currentPage === n ? `active` : ``}`}
                  key={n}
                  onClick={() => changePage(n)}
                >
                  <button>{n}</button>
                </li>
              ))}

              <li onClick={nextPage}>
                <button>Next</button>
              </li>
            </ul>
          </nav>
        </footer>
      )}
    </>
  );
};

export default Countries;
