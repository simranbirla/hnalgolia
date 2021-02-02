import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Filter from "./Filter";
import Header from "./Header";
import History from "./History";
import MainPage from "./MainPage";
import Search from "./Search";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Filter />
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/history" exact component={History} />
          <Route path="/search/:id" exact component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
