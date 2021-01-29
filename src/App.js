import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/posts' component></Route>
        <Route exact path='/user' component></Route>
      </Switch>
    </Router>
  );
}

export default App;
