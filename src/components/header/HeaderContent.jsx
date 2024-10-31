import Navigation from "./Navigation";
import TopHeader from "./TopHeader";

export default function Header({
  selectedRegion,
  searchCountry,
  setSearchCountry,
  setSelectedRegion,
}) {
  return (
    <header>
      <TopHeader />
      <Navigation
        selectedRegion={selectedRegion}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        setSelectedRegion={setSelectedRegion}
      />
    </header>
  );
}
