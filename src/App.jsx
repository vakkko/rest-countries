import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Navigation from "./components/Navigation/Navigation.jsx";
import { SearchContext } from "./context/context.js";

function App() {
  const location = useLocation();
  const [searchCountry, setSearchCountry] = useState("");
  const [searchRegion, setSearchRegion] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor =
      location.pathname === "/" ? "hsl(0, 0%, 98%)" : "white";
  }, [location.pathname]);
  return (
    <SearchContext.Provider
      value={{ searchCountry, setSearchCountry, searchRegion, setSearchRegion }}
    >
      <Header />
      <Navigation />
      <Outlet />
    </SearchContext.Provider>
  );
}

export default App;
