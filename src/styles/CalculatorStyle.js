import styled from "styled-components";

const CalculatorStyle = styled.div`
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

const CalculatorOtpora = styled.div`
  width: 100%;
  height: 100px;
  & form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 100px;
    gap: 20px;
    .multiply {
      color: white;
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
      color: #c6c6c6;
      font-size: 18px;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 100px;
      border: none;
      border-radius: 0;
      border-bottom: 1px solid #c6c6c6;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      -moz-appearance: textfield;
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
  }
`;

export { CalculatorStyle, CalculatorOtpora };
