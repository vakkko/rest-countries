import Countries from "./Countries/Countries.jsx";
import Navigation from "./Navigation/Navigation";

export default function Main({
  searchCountry,
  selectedRegion,
  setSelectedRegion,
  setSearchCountry,
}) {
  return (
    <>
      <Navigation
        setSelectedRegion={setSelectedRegion}
        setSearchCountry={setSearchCountry}
        searchCountry={searchCountry}
        selectedRegion={selectedRegion}
      />
      <Countries
        searchCountry={searchCountry}
        selectedRegion={selectedRegion}
      />
    </>
  );
}
