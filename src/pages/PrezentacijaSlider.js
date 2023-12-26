import { PrezentacijaSliderStyle } from "../styles/PrezentacijaSliderStyle";
import { useEffect } from "react";
import TravelShare from "../assets/travelShareImage.png";
import PortfolioWebsiteImage from "../assets/portfolioWebsiteImage.png";
import Contact from "./Contact";
import ArrowLeftIcon from "../assets/arrowLeftIcon.svg";
import { motion } from "framer-motion";
import MovieCatalogueImage from "../../src/assets/movieCatalogueImage.png";

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
      <PrezentacijaSliderStyle>
        <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
          <p className="double-click">
            Dupli <span>klik</span> za uvecanu verziju 
          </p>
          <div className="drag-to-move-container">
            <img src={ArrowLeftIcon} alt="" />
            <p className="drag-to-move">
              <span>Prevuci</span> na levo
            </p>
          </div>
          <img
            className="image"
            src="https://imgr1.auto-motor-und-sport.de/Aerodynamik-bei-Sportwagen-Lamborghini-169Inline-16559a46-1608846.jpg"
            draggable="false"
            alt=""
            onDoubleClick={() =>
              (window.location.href =
                "https://imgr1.auto-motor-und-sport.de/Aerodynamik-bei-Sportwagen-Lamborghini-169Inline-16559a46-1608846.jpg")
            }
          />
          <img
            className="image"
            src="https://stellantis3.dam-broadcast.com/medias/domain12808/media101999/599896-k1u9kt39i8-whr.jpg"
            draggable="false"
            alt=""
            onDoubleClick={() =>
              (window.location.href =
                "https://stellantis3.dam-broadcast.com/medias/domain12808/media101999/599896-k1u9kt39i8-whr.jpg")
            }
          />
          <img
            className="image"
            src="https://topgear-autoguide.com/images/0a30c88c9e7181c2be8a638a6b54976d.png"
            draggable="false"
            alt=""
            onDoubleClick={() =>
              (window.location.href =
                "https://topgear-autoguide.com/images/0a30c88c9e7181c2be8a638a6b54976d.png")
            }
          />
          <img
            className="image"
            src="https://img-comment-fun.9cache.com/media/aAxoGM0/adxRagRj_700w_0.jpg"
            draggable="false"
            alt=""
            onDoubleClick={() =>
              (window.location.href =
                "https://img-comment-fun.9cache.com/media/aAxoGM0/adxRagRj_700w_0.jpg")
            }
          />
          <img
            className="image"
            src="http://sersol.weebly.com/uploads/9/8/8/1/98818956/7_orig.jpg"
            draggable="false"
            alt=""
            onDoubleClick={() =>
              (window.location.href =
                "http://sersol.weebly.com/uploads/9/8/8/1/98818956/7_orig.jpg")
            }
          />
          <img
            className="image"
            src="https://www.team-bhp.com/forum/attachments/technical-stuff/2028275d1687364630t-aerodynamics-simulations-tesla-model-s-csstreamlines.png"
            draggable="false"
            alt=""
            onDoubleClick={() =>
              (window.location.href =
                "https://www.team-bhp.com/forum/attachments/technical-stuff/2028275d1687364630t-aerodynamics-simulations-tesla-model-s-csstreamlines.png")
            }
          />
        </div>
      </PrezentacijaSliderStyle>
      <Contact
        setIsContactOpen={props.setIsContactOpen}
        isContactOpen={props.isContactOpen}
      />
    </motion.div>
  );
}
