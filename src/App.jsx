import "./App.css";
import Header from "./components/header/HeaderContent";
import Countries from "./components/main/Countries";
import { useState } from "react";

function App() {
  console.log(localStorage);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  return (
    <>
      <Header
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
