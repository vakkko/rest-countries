import Navigation from "../components/Navigation/Navigation";
import CountriesContaiener from "../components/CountriesContainer/CountriesContainer";
import { useState } from "react";

export default function HomePage() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  return (
    <>
      <Navigation
        setSelectedRegion={setSelectedRegion}
        setSearchCountry={setSearchCountry}
        searchCountry={searchCountry}
        selectedRegion={selectedRegion}
      />
      <CountriesContaiener
        searchCountry={searchCountry}
        selectedRegion={selectedRegion}
      />
    </>
  );
}
