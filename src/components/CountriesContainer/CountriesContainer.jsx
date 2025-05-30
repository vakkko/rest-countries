import "./countriesContainer.css";
import { useState, useEffect, useContext } from "react";
import Info from "./Info/Info";
import axios from "axios";
import { NavLink, useLocation, useParams } from "react-router";
import { SearchContext } from "../../context/context";

const CountriesContaiener = () => {
  const [countries, setCountries] = useState();
  const [sortedCountries, setSortedCountries] = useState([]);
  const [page, setPage] = useState(0);

  const location = useLocation();
  const params = useParams();
  const currentPage = params.page;

  const search = useContext(SearchContext);
  const { searchCountry } = search;
  const searchRegion = search.searchRegion;

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((resp) => {
      const sortedData = resp.data.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );

      setCountries(sortedData);

      const pageNumber = Math.ceil(sortedData.length / 16);
      setPage(pageNumber);

      if (location.pathname === "/") {
        setSortedCountries(sortedData.slice(0, 16));
        setTimeout(() => {
          const element = document.querySelectorAll("nav > a");
          element[0].classList.add("active");
        }, 500);
      } else if (1 < currentPage < pageNumber) {
        setSortedCountries(
          sortedData.slice(
            (currentPage - 1) * pageNumber,
            currentPage * pageNumber
          )
        );
      }

      window.scrollTo(0, 0);

      if (searchCountry) {
        const sortedSearch = sortedData.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchCountry.toLowerCase());
        });

        const searchPages = Math.ceil(sortedSearch.length / 16);
        setPage(searchPages);

        setSortedCountries(
          sortedSearch.slice(
            (currentPage - 1) * pageNumber,
            currentPage * pageNumber
          )
        );
      }

      if (searchRegion) {
        const regionSearch = sortedData.filter((country) => {
          return country.region === searchRegion;
        });

        const regionPages = Math.ceil(regionSearch.length / 16);
        setPage(regionPages);

        setSortedCountries(
          regionSearch.slice(
            (currentPage - 1) * pageNumber,
            currentPage * pageNumber
          )
        );
      }

      if (location.pathname !== "/1") {
        setTimeout(() => {
          const element = document.querySelectorAll("nav > a");
          element[0].classList.remove("active");
        }, 500);
      }
    });
  }, [location.pathname, currentPage, searchCountry, searchRegion]);

  if (!countries) return null;
  const pages = [];
  for (let i = 1; i <= page; i++) {
    pages.push(i);
  }

  return (
    <div>
      <main className="countries-container">
        {sortedCountries.map((country, index) => (
          <Info
            key={index}
            country={country}
            page={params.page ? params.page : 1}
          />
        ))}
      </main>
      <footer>
        <nav>
          {pages.map((page, index) => (
            <NavLink to={`/${page}`} key={index}>
              {page}
            </NavLink>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default CountriesContaiener;
