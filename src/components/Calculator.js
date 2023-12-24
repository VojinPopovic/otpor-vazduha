import { useState } from "react";
import { CalculatorOtpora } from "../styles/CalculatorStyle";
import { MathJax } from "better-react-mathjax";

export default function Calculator(props) {
  const [result, setResult] = useState(0);
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
    <CalculatorOtpora>
      <form onSubmit={calculate}>
        <div className="group">
          <input type="number" required="required" />
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>
            <MathJax>{`\\(${props.value}\\)`}</MathJax>
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
        <button type="submit" className="pill-button calculate-button">
          Proracunaj
        </button>
      </form>
    </CalculatorOtpora>
  );
}
