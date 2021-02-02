import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch></Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
