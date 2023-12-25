import styled from "styled-components";

const HomeStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  & .dark-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: -1;
  }
  & .arrow-down {
    width: 50px;
    height: 30px;
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 40px;
    transition: 500ms;
    &:hover {
      transform: scale(1.2);
      transition: 500ms;
      cursor: pointer;
    }
  }
`;

const HomeCenteringDiv = styled.div`
  width: 80%;
  max-width: 1400px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .accent-span {
    color: #da3636;
  }
  & .me-text {
    width: auto;
    height: 30%;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 25px;
    color: white;
    & .otpor-vazduha-paragraph {
      letter-spacing: -5px;
      font-size: clamp(3.0rem, 8vw, 5rem);
      line-height: 0.8;
      white-space: nowrap;
    }
    & .sila-izdizanja-paragraph {
      font-size: clamp(2rem, 4vw, 4rem);
      white-space: nowrap;
      letter-spacing: -2px;
    }
  }
  & .graphic {
    width: 40%;
    height: 70%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    & img {
      width: 100%;
      height: 30%;
      max-width: 300px;
    }
  }
  & .home-buttons {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5%;
    & div,
    a > div {
      width: 20vw;
      height: clamp(30px, 6vw, 60px);
      max-height: 50px;
      min-height: 40px;
      min-width: 120px;
      max-width: 150px;
      font-size: clamp(1rem, 2.5vw, 1.3rem);
    }
    & .get-in-touch-button {
      background-color: #da3636;
      color: white;
    }
    & .my-work {
      background-color: white;
      color: #da3636;
    }
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    max-width: 700px;
    width: auto;
    height: 60vh;
    gap: 10%;
    justify-content: center;
    align-items: center;
    & .graphic {
      display: none;
    }
    & .home-buttons {
      width: 100%;
      display: flex;
      justify-content: flex-start;
    }
    & .me-text {
      height: 40%;
      & .hi-im-vojin-paragraph {
      }
      & .a-frontend-paragraph {
      }
    }
  }
  & .modal {
    width: 50ch;
    display: flex;
    padding: 20px 20px;
  }
`;
export { HomeStyle, HomeCenteringDiv };
