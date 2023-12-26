import styled from "styled-components";

const FooterMainStyle = styled.footer`
  width: 100%;
  height: 400px;
  background-color: #1e1e1e;
  border-top: 4px #da3636 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    height: 400px;
  }
  @media (max-width: 500px) {
    height: 500px;
  }
  @media (max-width: 650px) {
    padding-inline: 20px;
  }
  & * {
    color: white;
  }
  & .footer-content-centering-container {
    width: 80vw;
    max-width: 900px;
    height: 90%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    & #my-map-canvas {
      width: 50%;
      height: 100%;
      & iframe {
        height: 100%;
      }
    }
    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      height: 100%;
      gap: 20px;
      max-width: 600px;
    }
    @media (max-width: 650px) {
      width: 100%;
    }
    @media (max-width: 900px) {
    }
  }
`;
export { FooterMainStyle };
