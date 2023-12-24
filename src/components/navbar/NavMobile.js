import NavItems from "./NavItems";
import { NavMobileStyle } from "../../styles/NavMobileStyle";
import HamburgerClosed from "../../assets/HamburgerClosedIcon.svg";
import HamburgerOpen from "../../assets/HamburgerOpenIcon.svg";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function NavMobile(props) {
  const closedRef = useRef();
  const openRef = useRef();
  const [display, setDisplay] = useState(false);

  function openMenu() {
    openRef.current.style.display = "none";
    closedRef.current.style.display = "flex";
    setDisplay(true);
  }
  function closeMenu() {
    closedRef.current.style.display = "none";
    openRef.current.style.display = "flex";
    setDisplay(false);
  }

  return (
    <NavMobileStyle>
      <div className="close-open-icon-container">
        <img
          src={HamburgerOpen}
          onClick={openMenu}
          ref={openRef}
          className="open-menu"
          alt=""
        />
        <img
          src={HamburgerClosed}
          onClick={closeMenu}
          ref={closedRef}
          className="close-menu"
          alt=""
        />
      </div>
      <AnimatePresence>
        {display ? (
          <motion.div
            className="nav-mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="menu-container">
              <NavItems
                setIsContactOpen={props.setIsContactOpen}
                isContactOpen={props.isContactOpen}
                closedRef={closedRef}
                openRef={openRef}
                setDisplay={setDisplay}
                isMobile={true}
              ></NavItems>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </NavMobileStyle>
  );
}

export default NavMobile;
