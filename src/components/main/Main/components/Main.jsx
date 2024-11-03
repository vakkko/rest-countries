import Countries from "../../Countries/components/Countries.jsx";
import Navigation from "../../Navigation/components/Navigation.jsx";

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
