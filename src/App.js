import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div className="App">
            <Route path="/" component={Home} exact/>
            <Route path="/admin" component={Admin} exact/>
            <Route path="/error" component={Error}/>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
