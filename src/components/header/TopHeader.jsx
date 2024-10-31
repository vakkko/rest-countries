import "./topHeader.css";
import { useState, useEffect } from "react";
export default function TopHeader() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("darkMode", "enabled");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("darkMode", "disabled");
    }

    const topHeader = document.querySelector(".top-header");
    const countryInformation = document.querySelectorAll(
      ".country-information"
    );
    const countryInformationArr = Array.from(countryInformation);
    const countryName = document.querySelectorAll(".country");
    const countryNameArr = Array.from(countryName);
    const countryNav = document.querySelector(".country-navigation > input");

    topHeader.classList.toggle("dark-mode");
    countryInformationArr.forEach((cntr) => cntr.classList.toggle("dark-mode"));
    countryNameArr.forEach((cntr) => cntr.classList.toggle("dark-mode"));
    countryNav.classList.toggle("dark-mode");
  }, [isDarkMode]);

  return (
    <div className="top-header">
      <h1>Where in the world?</h1>
      <button onClick={toggleDarkMode} className="switch-mode">
        Dark mode
      </button>
    </div>
  );
}
