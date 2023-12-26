import { NavItemsStyle } from "../../styles/NavItemsStyle";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function NavItems({
  setDisplay,
  closedRef,
  openRef,
  isMobile,
  setIsContactOpen,
}) {
  const [activeTab, setActiveTab] = useState("tab-home");

  // Function to handle tab clicks
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    localStorage.setItem("activeTab", tabName); // Store the active tab in localStorage
    if (isMobile === true) {
      closedRef.current.style.display = "none";
      openRef.current.style.display = "flex";
      setDisplay(false);
    }
  };

  // On component mount, check if there is an active tab in localStorage and set it
  useEffect(() => {
    const storedActiveTab = localStorage.getItem("activeTab");
    if (storedActiveTab) {
      setActiveTab(storedActiveTab);
    }
  }, []);

  return (
    <NavItemsStyle className="nav-items">
      <Link
        to="/home"
        className={activeTab === "tab-home" ? "active" : ""}
        onClick={() => handleTabClick("tab-home")}
      >
        Home
      </Link>
      <Link
        to="/calculator"
        className={activeTab === "tab-calculator" ? "active" : ""}
        onClick={() => handleTabClick("tab-calculator")}
      >
        Kalkulator
      </Link>
      <Link
        to="/prezentacija-slider"
        className={activeTab === "tab-slider" ? "active" : ""}
        onClick={() => handleTabClick("tab-slider")}
      >
        Galerija
      </Link>
      <Link
        to="/about"
        className={activeTab === "tab-about" ? "active" : ""}
        onClick={() => handleTabClick("tab-about")}
      >
        About me
      </Link>
      <li
        onClick={() => {
          setIsContactOpen(true);
          setDisplay(false);
          closedRef.current.style.display = "none";
          openRef.current.style.display = "flex";
        }}
      >
        Contact
      </li>
    </NavItemsStyle>
  );
}

export default NavItems;
