import styled from "styled-components";

const PrezentacijaSliderStyle = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  background-color: black;
  margin: 0rem;
  overflow: hidden;
  z-index: -10;
  & #image-track {
    display: flex;
    gap: 4vmin;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, -50%);
    user-select: none; /* -- Prevent image highlighting -- */
    & .drag-to-move-container {
      position: absolute;
      width: 300px;
      left: -300px;
      display: flex;
      max-height: 40px;
      align-items: center;
      user-select: none;
      margin: auto 0;
      top: 0;
      bottom: 0;
      -moz-user-select: none;
      -webkit-user-select: none;
      @media (max-width: 800px) {
        left: -220px;
      }
      @media (max-width: 480px) {
        left: -130px;
      }
      @media (max-width: 380px) {
        left: -130px;
      }
      & img {
        max-height: 30px;
        margin-right: 10px;
        @media (max-width: 800px) {
          max-height: 25px;
        }
        @media (max-width: 480px) {
          max-height: 15px;
        }
      }
      & .drag-to-move {
        color: white;
        font-size: 30px;
        @media (max-width: 800px) {
          font-size: 25px;
        }
        @media (max-width: 480px) {
          font-size: 15px;
        }
        & span {
          color: #da3636;
        }
      }
    }
    & .double-click {
      color: white;
      margin-top: -120px;
      width: 100%;
      text-align: center;
      position: absolute;
      font-size: 30px;
      @media (max-width: 800px) {
        margin-top: -90px;
        font-size: 25px;
      }
      @media (max-width: 300px) {
        margin-top: -50px;
        font-size: 20px;
      }
      & span {
        color: #da3636;
      }
    }
  }

  & #image-track > .image {
    width: 40vmin;
    height: 56vmin;
    object-fit: cover;
    object-position: 100% center;
    cursor: pointer;
  }
`;

export { PrezentacijaSliderStyle };
