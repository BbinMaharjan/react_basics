import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./pages/Posts";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/users' component={Users} />
      </Switch>
    </Router>
  );
}

export default App;
