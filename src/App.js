import { MainDiv } from "./Global.style";
import { GlobalStyles } from "./Global.style";
import Home from "./pages/Home";
import NavMain from "./components/navbar/NavMain";
import { ContactModalProvider } from "./contexts/ContactModalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PortfolioSlider from "./pages/PortfolioSlider";
import { useState } from "react";
import { MathJaxContext } from "better-react-mathjax";
import CalculatorPage from "./pages/CalculatorPage"

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <MathJaxContext>
        <GlobalStyles></GlobalStyles>
        <ContactModalProvider>
          <MainDiv className="main-container">
            <BrowserRouter>
              <NavMain
                isContactOpen={isContactOpen}
                setIsContactOpen={setIsContactOpen}
              ></NavMain>
              <Routes>
                <Route
                  path="/home"
                  element={
                    <Home
                      isContactOpen={isContactOpen}
                      setIsContactOpen={setIsContactOpen}
                    />
                  }
                />
                <Route
                  path="/"
                  element={
                    <Home
                      isContactOpen={isContactOpen}
                      setIsContactOpen={setIsContactOpen}
                    />
                  }
                />
                <Route
                  path="/calculator"
                  element={
                    <CalculatorPage
                      isContactOpen={isContactOpen}
                      setIsContactOpen={setIsContactOpen}
                    />
                  }
                />
                <Route
                  path="/about"
                  element={
                    <About
                      setIsContactOpen={setIsContactOpen}
                      isContactOpen={isContactOpen}
                    />
                  }
                />
                <Route
                  path="/portfolio-slider"
                  element={
                    <PortfolioSlider
                      setIsContactOpen={setIsContactOpen}
                      isContactOpen={isContactOpen}
                    />
                  }
                />
              </Routes>
            </BrowserRouter>
          </MainDiv>
        </ContactModalProvider>
      </MathJaxContext>
    </>
  );
}

export default App;
