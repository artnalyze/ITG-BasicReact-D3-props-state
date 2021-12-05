import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact={true} element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/cart" element={<Cart />}/>
    </Routes>
  );
};

export default App;

/*
import { Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default App;
*/

// change syntax ref : https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom