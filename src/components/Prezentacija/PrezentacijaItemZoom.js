import { ZoomStyle } from "../../styles/ZoomStyle";
import dataObject from "../../resources/data";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function PrezentacijaItemZoom({ id, setZoom, zoom }) {
  return (
    <AnimatePresence>
      {zoom ? (
        <motion.div
          className="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ZoomStyle>
            <div className="content-holder">
              <img src={dataObject[id].Image} alt="" />
              <p>
                {dataObject[id].textOne}
                {dataObject[id]?.textTwo !== "" ? (
                  <>
                    <br /> <br /> {dataObject[id]?.textTwo}
                  </>
                ) : (
                  ""
                )}
                {dataObject[id].textThree !== "" ? (
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
        </motion.div>
      ) : (
        ""
      )}
    </AnimatePresence>
  );
}
