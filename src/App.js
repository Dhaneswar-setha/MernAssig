import "./App.css";
import Dash from "./Dash";

import Home from "./Home";
import Register from "./Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Dash setLoginUser={setLoginUser} />
            ) : (
              <Home setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/home">
            <Home setLoginUser={setLoginUser} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dash">
            <Dash />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
