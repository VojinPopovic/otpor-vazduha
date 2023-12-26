import { FooterMainStyle } from "../../styles/FooterMainStyle";

function FooterMain() {
  return (
    <FooterMainStyle>
      <div className="footer-content-centering-container">
        <div id="my-map-canvas">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed/v1/place?q=Kraljice+Marije+16,+Belgrade,+Serbia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>
        <p>Prezentacija radjena od strane Nikola Kojovic i Vojin Popovic</p>
      </div>
    </FooterMainStyle>
  );
}

export default FooterMain;
