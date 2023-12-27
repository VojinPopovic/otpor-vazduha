import styled from "styled-components";

const FooterMainStyle = styled.footer`
  width: 100%;
  height: 300px;
  background-color: #1e1e1e;
  border-top: 4px #da3636 solid;
  display: flex;
  justify-content: center;
  align-items: center;
  & * {
    color: white;
  }
  & .footer-content-centering-container {
    width: 90vw;
    max-width: 900px;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    & p{
      font-size: 25px;
    }
    & #my-map-canvas {
      width: 50%;
      height: 100%;
      & iframe {
        height: 100%;
      }
    }
  }
`;
export { FooterMainStyle };
