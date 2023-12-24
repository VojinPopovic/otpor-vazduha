import { AboutStyle } from "../styles/AboutStyle";
import MeImage from "../assets/me.png";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function About(props) {

  useEffect(() => {
    document.querySelector("html").style.overflow = "hidden";
  }, []);

  return (
    <>
      <motion.div
        className="motion-div"
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{duration: 0.6, ease: "easeInOut"}}
        exit={{ opacity: 1 }}
      >
        <AboutStyle>
          <div className="content-centering-container">
            <div className="image-container">
              <img src={MeImage} alt="" />
            </div>
            <div className="about-me-container">
              <p className="about-me-title">
                <span>About</span> me
              </p>
              <p className="about-me-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                veniam at? Sunt dolorum quaerat non nisi dolorem, aliquid
                inventore exercitationem veritatis iure itaque blanditiis iste
                ipsum doloremque incidunt autem, in obcaecati est delectus
                excepturi facilis perspiciatis iusto repellendus pariatur. Rerum
                excepturi suscipit enim dicta placeat magnam exercitationem
                sequi, id commodi pariatur atque sunt consequatur nihil modi in
                ducimus architecto sapiente similique dolore perferendis. Fugit
                facilis tempora amet distinctio ab ipsum, dolor quibusdam
                tenetur soluta placeat eligendi minus officiis impedit nulla ut
                dolorem suscipit doloremque enim. Repellat magni accusantium
                quas quo excepturi voluptatum explicabo voluptates ad, natus,
                quasi molestias fugit tenetur?
              </p>
            </div>
          </div>
        </AboutStyle>
        <Contact
          setIsContactOpen={props.setIsContactOpen}
          isContactOpen={props.isContactOpen}
        />
      </motion.div>
    </>
  );
}
