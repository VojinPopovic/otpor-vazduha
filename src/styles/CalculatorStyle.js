import styled from "styled-components";

const CalculatorStyle = styled.div`
  width: 100%;
  background-color: black;
  padding: 100px 20px;
  z-index: -10;
  position: relative;
  & .value-description {
    margin-top: 20px;
    color: white;
    display: flex;
    gap: 8px;
  }
  & .content-centering-container {
    max-width: 900px;
    height: auto;
    margin: 0 auto;
    @media (max-width: 750px) {
      height: 650px;
      flex-direction: column;
    }
    & .grid-centering-container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
      & p {
        color: white;
        width: 100%;
        font-size: 30px;
        padding: 20px 0;
        margin-bottom: 10px;
        display: flex;
        gap: 12px;
        & .my-span {
          color: #da3636;
        }
      }
      & .half,
      .result {
        font-size: x-large;
        margin-bottom: 0;
        color: white;
        width: 20px;
        @media (max-width: 750px) {
          padding: 0;
        }
      }
    }
    & .calculate-button {
      @media (max-width: 750px) {
        bottom: 0;
      }
    }
  }
`;

const CalculatorOtpora = styled.div`
  width: 100%;
  height: 130px;
  position: relative;
  @media (max-width: 750px) {
    height: 500px;
    flex-direction: column;
  }
  & form {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
    .multiply {
      color: white;
    }
    @media (max-width: 750px) {
      height: 700px;
      flex-direction: column;
      gap: 10px;
      align-items: flex-start;
    }
    .group {
      position: relative;
    }
    textarea {
      resize: none;
    }
    input,
    textarea {
      background: none;
      color: white;
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100px;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid white;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input:focus,
    textarea:focus {
      outline: none;
    }
    input:focus ~ label,
    textarea:focus ~ label,
    input:valid ~ label,
    textarea:valid ~ label {
      top: -14px;
      font-size: 12px;
      color: #da3636;
    }
    input:focus ~ .bar:before,
    textarea:focus ~ .bar:before {
      width: 100px;
    }
    input[type="password"] {
      letter-spacing: 0.3em;
    }
    label {
      color: #c6c6c6;
      font-size: 16px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      transition: 300ms ease all;
    }
    .bar {
      position: relative;
      display: block;
      width: 100px;
    }
    .bar:before {
      content: "";
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: #da3636;
      transition: 300ms ease all;
      left: 0%;
    }
    & button {
      padding: 10px 20px;
      position: absolute;
      bottom: 0;
      color: white;
    }
  }
`;

export { CalculatorStyle, CalculatorOtpora };
