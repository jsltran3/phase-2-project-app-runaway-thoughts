import React, { useState } from "react"; 
import './App.css';
import NavBar from "./JS/NavBar";
import TasksList from "./JS/TasksList"; 
import Home from "./JS/Home"
import SupportNetwork from "./JS/SupportNetwork"
import { Route, Switch } from "react-router-dom";


function App() {


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/SupportNetwork">
          <SupportNetwork />
        </Route>
        <Route exact path="/Tasks">
          <TasksList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
