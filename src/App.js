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
          <div>
            <Route path="/" component={Home} exact strict/>
            <Route path="/admin" component={Admin} exact strict/>
            <Route path="/error" component={Error}/>
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
