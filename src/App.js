import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/users' component={Users} />
        <Route exact path='/gallery' component={Gallery} />
      </Switch>
    </Router>
  );
}

export default App;
