import { CalculatorStyle } from "../styles/CalculatorStyle";
import Contact from "./Contact";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { CalculatorOtpora } from "../styles/CalculatorStyle";
import { MathJax } from "better-react-mathjax";
import { useState } from "react";

export default function Skills(props) {
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (props.isContactOpen) {
      document.querySelector("html").style.overflow = "hidden";
    } else {
      document.querySelector("html").style.overflow = "auto";
    }
  }, [props.isContactOpen]);

  function calculate(e) {
    e.preventDefault();
    let firstValue = e.target[0].value;
    let secondValue = e.target[1].value;
    let thirdValue = e.target[2].value;
    let fourthValue = e.target[3].value * e.target[3].value;
    let fifthValue = 0.5;
    setResult(firstValue * secondValue * thirdValue * fourthValue * fifthValue);
  }

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
              <p className="header-paragraph">
                <span className="my-span">Kalkulator</span> otpora
                <MathJax className="otpor">{"\\(F_w\\)"}</MathJax>
              </p>
              <CalculatorOtpora>
                <form onSubmit={calculate}>
                  <div className="group">
                    <input type="number" required="required" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>
                      <MathJax>{"\\(C_w\\)"}</MathJax>
                    </label>
                  </div>
                  <div className="multiply">x</div>
                  <div className="group">
                    <input type="number" required="required" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>
                      <MathJax>{"\\(A\\)"}</MathJax>
                    </label>
                  </div>
                  <div className="multiply">x</div>
                  <div className="group">
                    <input type="number" required="required" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>
                      <MathJax>{"\\(\\large \\rho\\)"}</MathJax>
                    </label>
                  </div>
                  <div className="multiply">x</div>
                  <div className="group">
                    <input type="number" required="required" />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>
                      <MathJax>{"\\(V^2\\)"}</MathJax>
                    </label>
                  </div>
                  <div className="multiply">x</div>
                  <p className="half">
                    <MathJax>{"\\(\\frac{1}{2}\\)"}</MathJax>
                  </p>
                  <div className="multiply">=</div>
                  <p className="half result">{result}</p>
                  <button
                    type="submit"
                    className="pill-button calculate-button"
                  >
                    Proracunaj
                  </button>
                </form>
              </CalculatorOtpora>
            </div>
          </div>
          <p className="value-description">
            <MathJax>{"\\(A\\)"}</MathJax> - Povrsina poprecnog preseka vozila
          </p>
          <p className="value-description">
            <MathJax>{"\\(\\large \\rho\\)"}</MathJax> - Gustina vazduha
          </p>
          <p className="value-description">
            <MathJax>{"\\(V\\)"}</MathJax> - Brzina vozila
          </p>
          <p className="value-description">
            <MathJax>{"\\(C_w\\)"}</MathJax> - Koeficijent otpora oblika vozila
          </p>
          <p className="value-description">
            ORIJENTACIONE VREDNOSTI Cw:
            <br />
            <br />
            • Današnja putnička vozila - 0,3
            <br />
            • Dostavna vozila - 0,4 do 0,6 (zatvorena ili otvorena karoserija?)
            <br />
            • Kamioni - 0,6 do 1 (spojleri, različite forme tovarnog prostora) 1
            (spojleri, različite forme tovarnog prostora)
            <br />
            • Bicikli, motocikli - 0,5 do 0,9 (uticaj oklopa i položaja vozača)
            <br />• Formula 1 - 0,7 do 1,1 (podešenost spojlera)
          </p>
        </CalculatorStyle>
        <Contact
          setIsContactOpen={props.setIsContactOpen}
          isContactOpen={props.isContactOpen}
        />
      </motion.div>
    </>
  );
}
