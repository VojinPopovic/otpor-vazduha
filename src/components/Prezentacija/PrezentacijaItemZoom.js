import { ZoomStyle } from "../../styles/ZoomStyle";
import dataObject from "../../resources/data";

export default function PrezentacijaItemZoom({ id, setZoom }) {
  console.log(dataObject[id].textTwo !== "" ? dataObject[id].textThree : "");
  return (
    <ZoomStyle>
      <div className="content-holder">
        <img src={dataObject[id].Image} alt="" />
        <p>
          {dataObject[id].textOne}
          {dataObject[id].textTwo != "" ? (
            <>
              <br /> <br /> {dataObject[id].textTwo}
            </>
          ) : (
            ""
          )}
          {dataObject[id].textThree != "" ? (
            <>
              <br /> <br /> {dataObject[id].textThree}
            </>
          ) : (
            ""
          )}
        </p>
        <button onClick={() => setZoom(false)} className="pill-button">
          Zatvori
        </button>
      </div>
    </ZoomStyle>
  );
}
