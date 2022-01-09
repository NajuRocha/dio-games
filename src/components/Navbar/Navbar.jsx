import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.min.js";
import { Navbar, Icon, NavItem } from "react-materialize";
import { Cartwidget } from "./CartWidget";
import "./Navbar.css";

export const NavBar = (props) => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="./">
          DIO Games
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="">JUEGOS</NavItem>
      <NavItem href="components.html">PLATAFORMAS</NavItem>
      <Cartwidget />
    </Navbar>
  );
};
