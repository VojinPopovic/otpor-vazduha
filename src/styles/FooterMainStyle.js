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
    height: 70%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
    & .picture-and-about-me-container {
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: start;
      @media (max-width: 900px) {
        width: auto;
        height: auto;
        flex-direction: column;
      }
      @media (max-width: 900px) {
        margin: 0 auto;
      }
      & .about-me-container {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        & .about-me-paragraph {
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          @media (max-width: 900px) {
            justify-content: flex-start;
            font-size: 1rem;
            width: auto;
          }
          @media (max-width: 650px) {
            margin-left: 0;
          }
        }
        & .hire-button {
          font-size: 1em;
          width: 200px;
          height: 50px;
          border-radius: 200px;
          background-color: #da3636;
          margin-left: 20px;
          margin-top: 20px;
          font-size: clamp(0.9rem, 2vw, 1.2rem);
          @media (max-width: 900px) {
            display: none;
          }
        }
      }
      & img {
        height: auto;
        width: auto;
        border: 4px white solid;
        border-radius: 10px;
        @media (max-width: 900px) {
          display: none;
        }
      }
      & p {
        margin-left: 20px;
        @media (max-width: 900px) {
          margin-left: 0;
        }
      }
    }
    & .social-media-buttons {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
      @media (max-width: 900px) {
        flex-direction: row;
        width: 100%;
        align-items: flex-start;
        height: auto;
        gap: 20px;
      }
      @media (max-width: 500px) {
        flex-direction: column;
      }
      & button {
        width: 150px;
        height: 50px;
        border-radius: 200px;
        background-color: #da3636;
        & a {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 5%;
        }
        & p {
          font-size: 1rem;
        }
        & .icon-container {
          width: 30%;
          height: 60%;
          position: relative;
          border-right: 1px white solid;
          & img {
            width: 100%;
            height: 100%;
            @media (max-width: 650px) {
              width: 70%;
            }
          }
        }
      }
    }
  }
`;
export { FooterMainStyle };
