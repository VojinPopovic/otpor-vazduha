import styled from "styled-components";

const NavMobileStyle = styled.div`
  width: auto;
  height: 100%;
  & .close-open-icon-container {
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
    max-width: 40px;
  }
  & .close-menu {
    display: none;
  }
  & .menu-container {
    position: fixed;
    width: 100%;
    height: 100vh;
    font-size: 30px;
    top: 0;
    left: 0; background-color: black;
    display: flex;
    justify-content: center;
    color: white;
    z-index: -2;
  }
`;

export { NavMobileStyle };
