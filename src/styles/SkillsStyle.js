import styled from "styled-components";

const SkillsStyled = styled.div`
  width: 100%;
  background-color: black;
  padding: 100px 20px;
  z-index: -10;
  position: relative;
  & .content-centering-container {
    max-width: 900px;
    height: auto;
    margin: 0 auto;
    & .grid-centering-container {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      & .skill-items {
        width: full;
        grid-template-columns: 250px 250px 250px;
        gap: 75px;
        display: grid;
        & .tilt {
          margin-top: 37.5px;
          @media (max-width: 1000px) {
            margin-top: 0;
          }
        }
        & .double-tilt {
          margin-top: 75px;
          @media (max-width: 1000px) {
            margin-top: 0;
          }
        }
        @media (max-width: 1000px) {
          grid-template-columns: 250px 250px;
          & div {
            margin-top: 0;
          }
        }
        @media (max-width: 600px) {
          grid-template-columns: 250px;
        }
        & img {
          max-width: 250px;
        }
      }
      & p {
        color: white;
        width: 900px;
        font-size: 40px;
        padding: 20px 0;
        margin-bottom: 20px;
        @media (max-width: 1000px) {
          width: 575px;
        }
        @media (max-width: 600px) {
          width: 250px;
        }
        & span {
          color: #da3636;
        }
      }
    }
  }
`;

export { SkillsStyled };
