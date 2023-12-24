import styled from "styled-components";

const AboutStyle = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  & .content-centering-container {
    width: 90%;
    max-width: 900px;
    display: flex;
    border-radius: 20px;
    overflow: hidden;
    & .image-container {
      max-height: 400px;
      max-width: 276px;
      & img {
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
        @media (max-width: 900px) {
          display: none;
        }
      }
    }
    & .about-me-container {
      padding-inline: 25px;
      color: white;
      @media (max-width: 900px) {
        padding-inline: 10px;
      }
      & .about-me-title {
        font-size: 25px;
        margin-bottom: 10px;
        & span {
          color: #da3636;
        }
      }
      & .about-me-paragraph {
        line-height: 22px;
        font-size: 17px;
      }
    }
  }
`;
export { AboutStyle };
