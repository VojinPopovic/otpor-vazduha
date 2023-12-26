import styled from "styled-components";

const ZoomStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: pink; 
  z-index: 999; 
  & .content-holder{
    width: 60%;
    height: 90%;
    max-width: 600px;
    max-height: 700px;
    background-color: black;
  }
`;

export { ZoomStyle };
