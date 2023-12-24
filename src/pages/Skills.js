import { SkillsStyled } from "../styles/SkillsStyle";
import JavascriptItem from "../assets/skills-items/javascriptItem.svg";
import TypescriptItem from "../assets/skills-items/typescriptItem.svg";
import ReactItem from "../assets/skills-items/reactItem.svg";
import NextjsItem from "../assets/skills-items/nextjsItem.svg";
import CssItem from "../assets/skills-items/cssItem.svg";
import TailwindItem from "../assets/skills-items/tailwindItem.svg";
import StyledComponentsItem from "../assets/skills-items/styledComponentsItem.svg";
import BootstrapItem from "../assets/skills-items/bootstrapItem.svg";
import HTMLItem from "../assets/skills-items/htmlItem.svg";
import MongoItem from "../assets/skills-items/mongodbItem.svg";
import SQLItem from "../assets/skills-items/sqlItem.svg";
import Contact from "./Contact";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Skills(props) {

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
        <SkillsStyled>
          <div className="content-centering-container">
            <div className="grid-centering-container">
              <p className="skills-paragraph">
                <span className="my-span">My</span> skills
              </p>
              <div className="skill-items">
                <Tilt>
                  <img src={JavascriptItem} alt="" />
                </Tilt>
                <Tilt>
                  <img src={TypescriptItem} className="tilt" alt="" />
                </Tilt>
                <Tilt>
                  <img src={ReactItem} className="double-tilt" alt="" />
                </Tilt>
                <Tilt>
                  <img src={NextjsItem} alt="" />
                </Tilt>
                <Tilt>
                  <img src={CssItem} className="tilt" alt="" />
                </Tilt>
                <Tilt>
                  <img src={TailwindItem} className="double-tilt" alt="" />
                </Tilt>
                <Tilt>
                  <img src={StyledComponentsItem} alt="" />
                </Tilt>
                <Tilt>
                  <img src={BootstrapItem} className="tilt" alt="" />
                </Tilt>
                <Tilt>
                  <img src={HTMLItem} className="double-tilt" alt="" />
                </Tilt>
                <Tilt>
                  <img src={MongoItem} alt="" />
                </Tilt>
                <Tilt>
                  <img src={SQLItem} className="tilt" alt="" />
                </Tilt>
              </div>
            </div>
          </div>
        </SkillsStyled>
        <Contact
          setIsContactOpen={props.setIsContactOpen}
          isContactOpen={props.isContactOpen}
        />
      </motion.div>
    </>
  );
}
