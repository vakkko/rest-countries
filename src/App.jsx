import "./App.css";
import Navigation from "./components/header/Navigation";
import TopHeader from "./components/header/TopHeader";
import Countries from "./components/main/Countries";
import { useState } from "react";

function App() {
  console.log(localStorage);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  return (
    <>
      <TopHeader />
      <Navigation
        selectedRegion={selectedRegion}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        setSelectedRegion={setSelectedRegion}
      />
      <Countries
        searchCountry={searchCountry}
        selectedRegion={selectedRegion}
      />
    </>
  );
}

export default App;
