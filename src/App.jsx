import { useEffect } from "react";
import Header from "./components/Header/Header.jsx";
import { Outlet } from "react-router";
import { useLocation } from "react-router";
import Navigation from "./components/Navigation/Navigation.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    document.body.style.backgroundColor =
      location.pathname === "/" ? "hsl(0, 0%, 98%)" : "white";
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Navigation />
      <Outlet />
    </>
  );
}

export default App;
