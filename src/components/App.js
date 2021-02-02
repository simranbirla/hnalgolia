import React from "react";
import { Switch, Router, Route } from "react-router-dom";
import history from "../history";
import Filter from "./Filter";
import Header from "./Header";
import History from "./History";
import MainPage from "./MainPage";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Filter />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/history" exact component={History} />
          <Route path="/query/:id" exact component={Search} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
