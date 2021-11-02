import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {Switch, Route} from "react-router-dom";

function App() {

  return (
    <>

  <div className="form">

    <Switch>
      <Route path="/" exect component={Signup}  />
      <Route path="/login" exect component={Login}   />
    </Switch>

  </div>

    
    </>
  );
};

export default App;
