import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
// import MainPage from "./components/MainPage/MainPage"
import Main from "./components/MainPage/Main"
import CeqPage from "./components/CeqPage/CeqPage"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/ceq"} component={CeqPage} />
        <Route path={"/"} component={Main} />
      </Switch>
    </BrowserRouter>
    
  );
};

export default App;