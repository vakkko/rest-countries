import TopHeader from "../../TopHeader/components/TopHeader";

export default function Header({
  selectedRegion,
  searchCountry,
  setSearchCountry,
  setSelectedRegion,
}) {
  return (
    <header>
      <TopHeader />
    </header>
  );
}
