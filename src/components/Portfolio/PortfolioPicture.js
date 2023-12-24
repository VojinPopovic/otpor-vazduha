import { PortfolioPictureStyle } from "../../styles/PortfolioPictureStyle";

function PortfolioPicture(props) {
  return (
    <PortfolioPictureStyle
      left={props.left}
      right={props.right}
      className={props.className}
    >
      {props.children}
    </PortfolioPictureStyle>
  );
}

export default PortfolioPicture;
