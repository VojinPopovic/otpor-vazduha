import styled from "styled-components";

const NavStyle = styled.div`
  width: 100%;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  z-index: 200;
  & .nav-centering-container{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .logo-container{
    width: 40%;
    height: 100%;
    color: white;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  @media (max-width: 1200px) {
    display: ${(props) => props.display};
    position: absolute;
    background-color: ${props => props.backgroundColor};
  }
`;

export { NavStyle };
