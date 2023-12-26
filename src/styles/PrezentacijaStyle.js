import styled from "styled-components";

const PrezentacijaStyle = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 4vh 0;
  border-top: 4px #da3636 solid;
  font-size: 1rem;
  background-color: white;
  & .content-centering-container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 900px;
    position: relative;
    margin: 0 auto;
    left: 0;
    right: 0;
    & .portfolio-title {
      position: absolute;
      width: 20%;
      min-width: 120px;
      height: 40px;
      background-color: #da3636;
      border-bottom-right-radius: clamp(20px, 3vw, 30px);
      border-bottom-left-radius: clamp(5px, 2vw, 10px);
      color: white;
      font-weight: 500;
      font-size: 1.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -4vh;
      left: 0;
      @media (max-width: 900px) {
        border-bottom-left-radius: clamp(0px, 0vw, 0px);
      }
    }
    & .item-centering-container {
      width: 80vw;
      max-width: 900px;
      height: 50vw;
      max-height: 500px;
      position: relative;
      margin: 0 auto;
      left: 0;
      right: 0;
      @media (max-width: 1000px) {
        margin-top: 100px;
        max-width: 900px;
        max-height: 800px;
      }
      @media (max-width: 600px) {
        width: 94vw;
        height: 60vw;
      }
    }
  }
`;

export { PrezentacijaStyle };
