import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import { NavBar } from "./components/Navbar/Navbar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartProvider from "./Context/CartProvider";
import { Footer } from "./components/Footer/Footer";
import { Form } from "./components/Form/Form";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <NavBar link="JUEGOS" />
          </header>
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting={"Bienvenidxs a DIO Games"} />
            </Route>
            <Route path={"/categoria/:categoriaId"}>
              <ItemListContainer />
            </Route>
            <Route path={"/item/:itemId"}>
              <ItemDetailContainer />
            </Route>
            <Route exact path={"/Cart"}>
              <Cart />
            </Route>
            <Route exact path={"/Form"}>
              <Form />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
