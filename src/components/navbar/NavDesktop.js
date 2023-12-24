import NavItems from "./NavItems";

function NavDesktop(props) {
  return (
    <NavItems
      setIsContactOpen={props.setIsContactOpen}
      isContactOpen={props.isContactOpen}
      isMobile={false}
    ></NavItems>
  );
}

export default NavDesktop;
