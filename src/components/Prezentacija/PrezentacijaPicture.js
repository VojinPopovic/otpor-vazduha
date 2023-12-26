import { PrezentacijaPictureStyle } from "../../styles/PrezentacijaPictureStyle";

function PortfolioPicture(props) {
  return (
    <PrezentacijaPictureStyle
      left={props.left}
      right={props.right}
      className={props.className}
    >
      {props.children}
    </PrezentacijaPictureStyle>
  );
}

export default PortfolioPicture;
