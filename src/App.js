import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "./components/MainPage/MainPage"
import CeqPage from "./components/CeqPage/CeqPage"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/ceq"} component={CeqPage} />
        <Route path={"/"} component={MainPage} />
      </Switch>
    </BrowserRouter>
    
  );
};

export default App;