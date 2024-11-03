import "./App.css";
import Header from "./components/header/Header/components/Header.jsx";
import { useState } from "react";
import Main from "./components/main/Main/components/Main.jsx";

function App() {
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
      <Main
        setSelectedRegion={setSelectedRegion}
        setSearchCountry={setSearchCountry}
        searchCountry={searchCountry}
        selectedRegion={selectedRegion}
      />
    </>
  );
}

export default App;
