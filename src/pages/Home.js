import { HomeStyle } from "../styles/HomeStyle";
import { HomeCenteringDiv } from "../styles/HomeStyle";
import BackgroundImage from "../assets/BackgroundImage.jpeg";
import MainSectionGraphic from "../assets/MainSectionGraphic.svg";
import { ReactComponent as ArrowDownGraphic } from "../assets/ArrowDownGraphic.svg";
import Contact from "./Contact";
import Prezentacija from "./Prezentacija";
import FooterMain from "../components/footer/FooterMain";
import { motion } from "framer-motion";
import { useEffect } from "react";

function Home(props) {
  function openModal() {
    props.setIsContactOpen(true);
  }

  useEffect(() => {
    if (props.isContactOpen) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  }, [props.isContactOpen]);

  return (
    <>
      <motion.div
        className="motion-div"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        exit={{ opacity: 1 }}
      >
        <HomeStyle className="home-style-container">
          <img src={BackgroundImage} alt="" />
          <div className="dark-overlay"></div>
          <HomeCenteringDiv className="home-centering-container">
            <div className="me-text">
              <p className="otpor-vazduha-paragraph">
                <span className="accent-span">Otpor</span> vazduha
              </p>
              <p className="sila-izdizanja-paragraph">
                I aerodinamicke<span className="accent-span"> sile </span>
                izdizanja
              </p>
              <div className="home-buttons">
                <div
                  className="get-in-touch-button pill-button"
                  onClick={openModal}
                >
                  Kontakt
                </div>
                <a href="#portfolio">
                  <div className="my-work pill-button">Prezentacija</div>
                </a>
              </div>
            </div>
            <div className="graphic">
              <img
                src={MainSectionGraphic}
                alt=""
                className="main-section-graphic"
              />
            </div>
          </HomeCenteringDiv>
          <a href="#portfolio">
            <ArrowDownGraphic className="arrow-down"></ArrowDownGraphic>
          </a>
        </HomeStyle>
        <Prezentacija zoom={props.zoom} setZoom={props.setZoom} setId={props.setId}></Prezentacija>
        <FooterMain></FooterMain>
        <Contact
          setIsContactOpen={props.setIsContactOpen}
          isContactOpen={props.isContactOpen}
        ></Contact>
      </motion.div>
    </>
  );
}

export default Home;
