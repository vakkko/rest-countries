import "./topHeader.css";
export default function TopHeader() {
  function handleClick() {
    const topHeader = document.querySelector(".top-header");
    const countryInformation = document.querySelectorAll(
      ".country-information"
    );
    const countryInformationArr = Array.from(countryInformation);
    const countryName = document.querySelectorAll(".country");
    const countryNameArr = Array.from(countryName);
    const countryNav = document.querySelector(".country-navigation > input");

    document.body.classList.toggle("dark-mode");
    topHeader.classList.toggle("dark-mode");
    countryInformationArr.forEach((cntr) => cntr.classList.toggle("dark-mode"));
    countryNameArr.forEach((cntr) => cntr.classList.toggle("dark-mode"));
    countryNav.classList.toggle("dark-mode");
  }

  return (
    <div className="top-header">
      <h1>Where in the world?</h1>
      <button onClick={() => handleClick()} className="switch-mode">
        Dark mode
      </button>
    </div>
  );
}
