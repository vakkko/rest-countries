import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter, Routes, Route, Navigate } from "react-router";
import CountryPage from "./pages/CountryPage/CountryPage";
import CountriesContaiener from "./components/CountriesContainer/CountriesContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Navigate to="/1" replace />} />
          <Route path=":page" element={<CountriesContaiener />} />
          <Route path=":page/:country" element={<CountryPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>
);
