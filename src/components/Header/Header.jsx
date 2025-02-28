import "./Header.css";
import { useState, useEffect } from "react";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "enabled";
  });
  const [animateMoon, setAnimateMoon] = useState(false);
  const [animateSun, setAnimateSun] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    setAnimateMoon(!animateMoon);
    setAnimateSun(!animateSun);
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
        {!animateMoon && (
          <svg
            className={` ${animateMoon ? "hide-moon" : "appear-moon"}`}
            height="14px"
            width="15px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
            fill="#000000"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill="#000000;"
                d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28 s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"
              ></path>{" "}
            </g>
          </svg>
        )}
        {animateSun && (
          <svg
            className={` ${animateSun ? "hide-sun" : "appear-sun"}`}
            height="14px"
            width="15px"
            viewBox="0 0 16 16"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7 3V0H9V3H7Z" fill="white" />
            <path d="M9 13V16H7V13H9Z" fill="white" />
            <path
              d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
              fill="white"
            />
            <path d="M0 9H3V7H0V9Z" fill="white" />
            <path d="M16 7H13V9H16V7Z" fill="white" />
            <path
              d="M3.75735 5.17157L1.63603 3.05025L3.05025 1.63603L5.17157 3.75735L3.75735 5.17157Z"
              fill="white"
            />
            <path
              d="M12.2426 10.8284L14.364 12.9497L12.9497 14.364L10.8284 12.2426L12.2426 10.8284Z"
              fill="white"
            />
            <path
              d="M3.05025 14.364L5.17157 12.2426L3.75735 10.8284L1.63603 12.9498L3.05025 14.364Z"
              fill="white"
            />
            <path
              d="M12.9497 1.63604L10.8284 3.75736L12.2426 5.17158L14.364 3.05026L12.9497 1.63604Z"
              fill="white"
            />
          </svg>
        )}
        {!animateMoon ? "Dark mode" : "Light mode"}
      </button>
    </div>
  );
}
