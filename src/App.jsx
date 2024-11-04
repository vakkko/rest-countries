import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchCountry, setSearchCountry] = useState("");
  return (
    <>
      <Header />
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
