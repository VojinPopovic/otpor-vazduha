import { PortfolioItemDescriptionStyle } from "../../styles/PortfolioItemDescriptionStyle";

function PortfolioItemDescription(props) {
  return (
    <PortfolioItemDescriptionStyle
      left={props.left}
      right={props.right}
      className={props.className}
    >
      {props.children}
    </PortfolioItemDescriptionStyle>
  );
}

export default PortfolioItemDescription;
