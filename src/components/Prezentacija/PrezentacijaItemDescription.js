import { PrezentacijaItemDescriptionStyle } from "../../styles/PrezentacijaItemDescriptionStyle";

function PortfolioItemDescription(props) {
  return (
    <PrezentacijaItemDescriptionStyle
      left={props.left}
      right={props.right}
      className={props.className}
    >
      {props.children}
    </PrezentacijaItemDescriptionStyle>
  );
}

export default PortfolioItemDescription;
