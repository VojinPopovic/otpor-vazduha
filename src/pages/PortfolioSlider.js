import { PortfolioSliderStyle } from "../styles/PortfolioSliderStyle";
import { useEffect } from "react";
import TravelShare from "../assets/travelShareImage.png";
import PortfolioWebsiteImage from "../assets/portfolioWebsiteImage.png";
import Contact from "./Contact";
import ArrowLeftIcon from "../assets/arrowLeftIcon.svg";
import { motion } from "framer-motion";
import MovieCatalogueImage from "../../src/assets/movieCatalogueImage.png"

export default function PortfolioSlider(props) {
  useEffect(() => {
    const track = document.getElementById("image-track");

    const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

    const handleOnUp = () => {
      track.dataset.mouseDownAt = "0";
      track.dataset.prevPercentage = track.dataset.percentage;
    };

    const handleOnMove = (e) => {
      if (track.dataset.mouseDownAt === "0") return;

      const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained =
          parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(
          Math.min(nextPercentageUnconstrained, 0),
          -100
        );

      track.dataset.percentage = nextPercentage;

      track.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 1200, fill: "forwards" }
      );

      for (const image of track.getElementsByClassName("image")) {
        image.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 1200, fill: "forwards" }
        );
      }
    };

    /* -- Had to add extra lines for touch events -- */

    window.onmousedown = (e) => handleOnDown(e);

    window.ontouchstart = (e) => handleOnDown(e.touches[0]);

    window.onmouseup = (e) => handleOnUp(e);

    window.ontouchend = (e) => handleOnUp(e.touches[0]);

    window.onmousemove = (e) => handleOnMove(e);

    window.ontouchmove = (e) => handleOnMove(e.touches[0]);
  }, []);

  useEffect(() => {
    document.querySelector("html").style.overflow = "hidden";
  }, []);

  return (
    <motion.div
      className="motion-div"
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      exit={{ opacity: 1 }}
    >
      <PortfolioSliderStyle>
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
          <p className="double-click">
            Double <span>click</span> to go to the Live Demo
          </p>
          <div className="drag-to-move-container">
            <img src={ArrowLeftIcon} alt="" />
            <p className="drag-to-move">
              <span>Drag</span> to move
            </p>
          </div>
          <img
            className="image"
            src={TravelShare}
            draggable="false"
            alt=""
            onDoubleClick={() =>
              (window.location.href = "https://travel-share.vercel.app/")
            }
          />
          <img
            className="image"
            src={PortfolioWebsiteImage}
            draggable="false"
            alt=""
            onDoubleClick={() => (window.location.href = "/")}
          />
          <img
            className="image"
            src={MovieCatalogueImage}
            draggable="false"
            alt=""
            onDoubleClick={() => (window.location.href = "https://popular-movie-catalogue.vercel.app/")}
          />
        </div>
      </PortfolioSliderStyle>
      <Contact
        setIsContactOpen={props.setIsContactOpen}
        isContactOpen={props.isContactOpen}
      />
    </motion.div>
  );
}
