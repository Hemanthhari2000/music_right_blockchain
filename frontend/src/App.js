import React from "react";
import NavBar from "./components/NavBar/NavBar";

import Home from "./screens/Home/Home";
import Mine from "./screens/Mine/Mine";
import Visualize from "./screens/Visualize/Visualize";
import Verify from "./screens/Verify/Verify";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mine" exact component={Mine} />
          <Route path="/visualize" exact component={Visualize} />
          <Route path="/verify" exact component={Verify} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
