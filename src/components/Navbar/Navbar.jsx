import "materialize-css/dist/css/materialize.css";
import "materialize-css/dist/js/materialize.min.js";
import { Navbar, Icon } from "react-materialize";
import { Link } from "react-router-dom";
import { Cartwidget } from "./CartWidget";
import "./Navbar.css";

export const NavBar = (props) => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <Link className="brand-logo" to={`/`}>
          DIO Games
        </Link>
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
      <Link to={"/categoria/Accion"}>Accion</Link>
      <Link to={"/categoria/Mundo-abierto"}>Mundo abierto</Link>
      <Link to={"/categoria/Terror"}>Terror</Link>
      <Cartwidget />
    </Navbar>
  );
};

//borre los NavItem de materialize para solucionar el error por consola de
//"react-dom.development.js:67 Warning: validateDOMNesting(...): <a> cannot appear as a descendant of <a>""
