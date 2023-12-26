import styled from "styled-components";

const PrezentacijaItemDescriptionStyle = styled.div`
  width: 40%;
  height: 60%;
  background-color: #da3636;
  border-radius: clamp(7px, 3vw, 20px);
  position: absolute;
  margin: auto 0;
  top: 0;
  bottom: 0;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3%;
  color: white;
  padding: 2% 3%;
  z-index: 2;
  & .item-buttons {
    display: flex;
    max-height: 40px;
    gap: 10px;
    & a {
      min-width: 100px;
      padding-inline: 5%;
      padding-block: 2%;
      max-width: 120px;
      background-color: white;
      border-radius: 200px;
      font-size: clamp(0.8rem, 1.5vw, 1rem);
      color: black;
      margin-top: 5px;
    }
    & :nth-child(2) {
      background-color: transparent;
      border: 1px white solid;
      color: white;
      &:hover {
        overflow: hidden;
      }
    }
  }
  @media (max-width: 1000px) {
    bottom: 0;
    left: 5%;
    top: auto;
    height: 50%;
    width: 60%;
  }
  @media (max-width: 600px) {
    bottom: 0;
    left: 0;
    right: 0;
    top: auto;
    margin: 0 auto;
    height: 55%;
    width: 80%;
  }
  & :first-child {
    font-size: clamp(1.1rem, 3vw, 1.7rem);
  }
  & :nth-child(2),
  .item-description {
    font-size: clamp(0.9rem, 1.5vw, 1rem);
    overflow: hidden;
    line-height: 20px;
    &:hover {
      overflow: auto;
    }
    @media (max-width: 600px) {
    }
  }
`;

export { PrezentacijaItemDescriptionStyle };
