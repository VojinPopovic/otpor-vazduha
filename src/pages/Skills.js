import { CalculatorStyle } from "../styles/CalculatorStyle";
import Contact from "./Contact";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CalculatorOtpora } from "../styles/CalculatorStyle";
import { MathJax } from "better-react-mathjax";

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
        <CalculatorStyle>
          <div className="content-centering-container">
            <div className="grid-centering-container">
              <p className="skills-paragraph">
                <span className="my-span">Kalkulator</span> otpora
              </p>
              <CalculatorOtpora>
                <form>
                  <div class="group">
                    <input type="number" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>
                      <MathJax>{"\\(C_w\\)"}</MathJax>
                    </label>
                  </div>
                  <div className="multiply">X</div>
                  <div class="group">
                    <input type="number" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>
                      <MathJax>{"\\(A\\)"}</MathJax>
                    </label>
                  </div>
                  <div className="multiply">X</div>
                  <div class="group">
                    <input type="number" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>
                      <MathJax>{"\\(\\rho\\)"}</MathJax>
                    </label>
                  </div>
                  <div className="multiply">X</div>
                  <div class="group">
                    <input type="number" required="required" />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>
                      <MathJax>{"\\(\V^2\\)"}</MathJax>
                    </label>
                  </div>
                  <div className="multiply">=</div>
                  <div class="btn-box">
                    <button class="btn btn-submit" type="submit">
                      submit
                    </button>
                    <button class="btn btn-cancel" type="button">
                      cancel
                    </button>
                  </div>
                </form>
              </CalculatorOtpora>
            </div>
          </div>
        </CalculatorStyle>
        <Contact
          setIsContactOpen={props.setIsContactOpen}
          isContactOpen={props.isContactOpen}
        />
      </motion.div>
    </>
  );
}
