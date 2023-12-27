import { PrezentacijaStyle } from "../styles/PrezentacijaStyle";
import PrezentacijaItemDescription from "../components/Prezentacija/PrezentacijaItemDescription";
import PrezentacijaPicture from "../components/Prezentacija/PrezentacijaPicture";
import dataObject from "../resources/data";

function Prezentacija({ setZoom, setId }) {
  function zoomItem(e) {
    if (setId && setZoom !== undefined) {
      setId(e.target.className.split(" ")[1]);
      setZoom(true);
    } else { console.log("osdsf")}
  }

  return (
    <>
      <PrezentacijaStyle>
        <div className="content-centering-container">
          <div className="portfolio-title" id="portfolio">
            <p>Prezentacija</p>
          </div>
          <div className="item-centering-container">
            <PrezentacijaPicture right="0">
              <img src={dataObject.firstItem.Image} alt="" />
            </PrezentacijaPicture>
            <PrezentacijaItemDescription left="0">
              <p className="item-title">Uvod</p>
              <p className="item-description">{dataObject.firstItem.textOne}</p>
              <div className="item-buttons">
                <div onClick={zoomItem} className="pill-button firstItem">
                  Povecaj
                </div>
              </div>
            </PrezentacijaItemDescription>
          </div>
          <div className="item-centering-container">
            <PrezentacijaItemDescription right="0">
              <p className="item-title">Otpor vazduha</p>
              <p className="item-description">
                {dataObject.secondItem.textOne}
                <br />
                <br />
                {dataObject.secondItem.textTwo}
              </p>
              <div className="item-buttons">
                <div onClick={zoomItem} className="pill-button secondItem">
                  Povecaj
                </div>
              </div>
            </PrezentacijaItemDescription>
            <PrezentacijaPicture left="0">
              <img src={dataObject.secondItem.Image} alt="" />
            </PrezentacijaPicture>
          </div>
          <div className="item-centering-container">
            <PrezentacijaPicture right="0">
              <img src={dataObject.thirdItem.Image} alt="" />
            </PrezentacijaPicture>
            <PrezentacijaItemDescription left="0">
              <p className="item-title">Uzgon i potisna sila</p>
              <p className="item-description">
                {dataObject.thirdItem.textOne}
                <br />
                <br />
                {dataObject.thirdItem.textTwo}
                <br />
                <br />
                {dataObject.thirdItem.textThree}
              </p>
              <div className="item-buttons">
                <div onClick={zoomItem} className="pill-button thirdItem">
                  Povecaj
                </div>
              </div>
            </PrezentacijaItemDescription>
          </div>
        </div>
      </PrezentacijaStyle>
    </>
  );
}

export default Prezentacija;
