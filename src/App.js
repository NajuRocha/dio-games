import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { NavBar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-route-dom";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <NavBar link="JUEGOS" />
        </header>
        <Switch>
          <ItemListContainer greeting={"Bienvenidxs a DIO Games"} />
          <ItemItemDetailContainer />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
