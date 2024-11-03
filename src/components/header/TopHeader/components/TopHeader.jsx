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
