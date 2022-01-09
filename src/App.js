import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { NavBar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar link="JUEGOS" />
      </header>
      <ItemListContainer greeting={"Bienvenidxs a DIO Games"} />
    </div>
  );
}

export default App;
