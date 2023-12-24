import styled from "styled-components";

const ContactFormStyle = styled.div`
  width: 80%;
  max-width: 700px;
  height: auto;
  max-height: 600px;
  background-color: white;
  border-radius: clamp(10px, 3vw, 20px);
  position: absolute;
  height: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 500px) {
    height: 400px;
  }
  & form {
    width: 80%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & .form-inner {
      width: 100%;
      height: auto;
      & h1 {
        font-size: clamp(1.7rem, 4vw, 2.5rem);
        text-align: center;
        margin-bottom: 10%;
      }
      & input,
      textarea {
        border: 1px rgba(0, 0, 0, 0.2) solid;
        border-radius: clamp(5px, 2vw, 10px);
        width: 100%;
        margin-bottom: 10%;
        background-color: white;
        padding-left: 5px;
      }
      & textarea {
        padding-top: 5px;
      }
      & input {
        height: clamp(40px, 5vw, 50px);
      }
    }
  }
  &::backdrop {
    background: rgba(0, 0, 0, 0.5);
  }
  & .form-buttons {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 10%;
    align-items: center;
    & button {
      color: white;
      width: 30%;
      height: clamp(40px, 5vw, 50px);
      font-size: clamp(0.6rem, 4vw, 1.2rem);
    }
  }
`;

export { ContactFormStyle };
