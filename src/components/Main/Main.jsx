// import Countries from "./Countries/components/Countries";
// import Navigation from "./Navigation/Navigation";
import Countries from "./components/Countries/Countries";
import Navigation from "./components/Navigation/Navigation";

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
