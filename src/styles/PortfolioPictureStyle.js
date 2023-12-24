import styled from "styled-components";

const PortfolioPictureStyle = styled.div`
  width: 70%;
  height: 75%;
  outline: 3px rgba(0, 0, 0, 0.2) solid;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px;
  position: absolute;
  right: ${(props) => props.right};
  margin: auto 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
  @media (max-width: 1000px) {
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: auto;
    width: 100%;
    height: 80%;
  }
  & div {
    transform: translate(-50%);
  }
  & img {
    width: 100%;
    height: 100%;
  }
`;

export { PortfolioPictureStyle };
