import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  background: transparent;
  box-sizing: border-box;
  font-family: 'Roboto';
 }

html {
  scroll-behavior: smooth;
  background-color: black;
} 

 a{
  text-decoration: none;
  color: white;
 }
 .pill-button{
  background-color: #DA3636;
  border-radius: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 200ms;
  &:hover {
     transform: scale(1.1);
     transition: 200ms;
     cursor: pointer;
     transition-timing-function: ease-in-out;
  }
 }
  & .modal{
    width: 100%;
    height: 100vh;
    background-color: white;
    position: fixed;
  }
  & .active {
    background-color: #DA3636;
    border-radius: 200px;
    padding: 5px 15px;
    @media (max-width: 1200px) {
      background-color: #DA3636;
      padding: 2% 100%;
    }
  }
  & .motion-div{
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  }
`;

const MainDiv = styled.div`
  width: 100%;
  height: auto;
`;

export { GlobalStyles, MainDiv };
