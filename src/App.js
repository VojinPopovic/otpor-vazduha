import { MainDiv } from "./Global.style";
import { GlobalStyles } from "./Global.style";
import Home from "./pages/Home";
import NavMain from "./components/navbar/NavMain";
import { ContactModalProvider } from "./contexts/ContactModalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrezentacijaSlider from "./pages/PrezentacijaSlider";
import { useState } from "react";
import { MathJaxContext } from "better-react-mathjax";
import CalculatorPage from "./pages/CalculatorPage";
import PrezentacijaItemZoom from "./components/Prezentacija/PrezentacijaItemZoom";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [id, setId] = useState("firstItem");

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
                      zoom={zoom}
                      setZoom={setZoom}
                      setId={setId}
                    />
                  }
                />
                <Route
                  path="/"
                  element={
                    <Home
                      isContactOpen={isContactOpen}
                      setIsContactOpen={setIsContactOpen}
                      setZoom={setZoom}
                      setId={setId}
                      zoom={zoom}
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
                  path="/prezentacija-slider"
                  element={
                    <PrezentacijaSlider
                      setIsContactOpen={setIsContactOpen}
                      isContactOpen={isContactOpen}
                    />
                  }
                />
              </Routes>
            </BrowserRouter>
          </MainDiv>
          <PrezentacijaItemZoom
            id={id}
            setZoom={setZoom}
            zoom={zoom}
          ></PrezentacijaItemZoom>
        </ContactModalProvider>
      </MathJaxContext>
    </>
  );
}

export default App;
