import styled from "styled-components";

const NavItemsStyle = styled.ul`
  width: 50%;
  height: 100%;
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  transition: 300ms;
  a,
  li {
    padding: 5px 15px;
    cursor: pointer;
    transition: 500ms;
    white-space: nowrap;
    @media (max-width: 1200px) {
      padding: 2% 100%;
    }
  }
  & a:hover,
  li:hover {
    background-color: #da3636;
    border-radius: 500px;
    transform: scale(1.1);
    transition: 300ms;
    cursor: pointer;
    transition-timing-function: ease-in-out;
  }
  @media (min-width: 1200px) {
    display: flex;
  }
  @media (max-width: 1200px) {
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin: 20px 0;
  }
`;

export { NavItemsStyle };
