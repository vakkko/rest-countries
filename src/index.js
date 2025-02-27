import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage/CountryPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path=":country" element={<CountryPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
