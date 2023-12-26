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
  background: white;
  z-index: 999;
  & .content-holder {
    width: 60%;
    height: auto;
    max-width: 600px;
    background-color: red;
    border-radius: 20px;
    overflow: hidden;
    padding-bottom: 20px;
    & img {
      width: 100%;
    }
    & p {
      color: white;
      margin: 20px 20px;
    }
    & button {
      margin-top: 10px;
      padding: 8px 20px;
      background-color: white;
      margin-left: 20px;
    }
  }
`;

export { ZoomStyle };
