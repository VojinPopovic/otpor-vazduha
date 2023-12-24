import { CalculatorStyle } from "../styles/CalculatorStyle";
import Contact from "./Contact";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { MathJax } from "better-react-mathjax";
import Calculator from "../components/Calculator";
import ValueSelection from "../assets/constantValuesSelection.png";

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
              <p className="header-paragraph">
                <span className="my-span">Kalkulator</span> otpora
                <MathJax className="otpor">{"\\(F_w\\)"}</MathJax>
              </p>
              <Calculator value="C_w"></Calculator>
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
              <MathJax>{"\\(C_w\\)"}</MathJax> - Koeficijent otpora oblika
              vozila
            </p>
            <p className="value-description">
              ORIJENTACIONE VREDNOSTI Cw:
              <br />
              <br />
              • Današnja putnička vozila - 0,3
              <br />
              • Dostavna vozila - 0,4 do 0,6 (zatvorena ili otvorena
              karoserija?)
              <br />
              • Kamioni - 0,6 do 1 (spojleri, različite forme tovarnog prostora)
              1 (spojleri, različite forme tovarnog prostora)
              <br />
              • Bicikli, motocikli - 0,5 do 0,9 (uticaj oklopa i položaja
              vozača)
              <br />• Formula 1 - 0,7 do 1,1 (podešenost spojlera)
            </p>
          </div>
          <br />
          <br />
          <div className="content-centering-container">
            <div className="grid-centering-container">
              <p className="header-paragraph">
                <span className="my-span">Kalkulator</span> aerodinamicke sile
                izdizanja
                <MathJax className="otpor">{"\\(F_Lp\\)"}</MathJax> i
                <MathJax className="otpor">{"\\(F_Lz\\)"}</MathJax>
              </p>
              <p className="sub-header-paragraph">
                1) Sila izdizanja <span className="my-span"> prednje</span>{" "}
                osovine
              </p>
              <Calculator value="C_Lp"></Calculator>
              <p className="value-description">
                <MathJax>{"\\(C_Lp(C_Lf)\\)"}</MathJax> - Koeficijent sile
                uzdizanja prednje osovine{" "}
              </p>
              <br />
              <br />
              <br />
              <p className="sub-header-paragraph">
                2) Sila izdizanja <span className="my-span">zadnje</span>{" "}
                osovine
              </p>
              <Calculator value="C_Lz"></Calculator>
              <p className="value-description">
                <MathJax>{"\\(C_Lp(C_Lf)\\)"}</MathJax> - Koeficijent sile
                uzdizanja prednje osovine{" "}
              </p>
              <br />
              <br />
              <br />
              <br />
              <img src={ValueSelection} alt="" />
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
