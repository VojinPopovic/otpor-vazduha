import { NavStyle } from "../../styles/NavStyle";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { useEffect, useState } from "react";

function NavMain(props) {
  const [width, setWidth] = useState(window.innerWidth);

  let breakpoint = 1200;
  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.removeEventListener("resize", handleResizeWindow);
    window.addEventListener("resize", handleResizeWindow);
  }, [width]);

  function renderNav() {
    if (width >= breakpoint) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <NavStyle className="nav-main">
      <div className="nav-centering-container">
        <div className="logo-container">
          <Logo></Logo>
        </div>
        {renderNav() ? (
          <NavDesktop
            setIsContactOpen={props.setIsContactOpen}
            isContactOpen={props.isContactOpen}
          />
        ) : (
          <NavMobile
            setIsContactOpen={props.setIsContactOpen}
            isContactOpen={props.isContactOpen}
          />
        )}
      </div>
    </NavStyle>
  );
}

export default NavMain;
