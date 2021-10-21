import React from 'react';
import { Route, Switch} from "react-router-dom";
import MainPage from '../MainPage/MainPage'
import CeqPage from "../CeqPage/CeqPage"
import AddingPage from './AddingPage';

const Main = () => {
  return (
    <Switch>
      <Route path={"/ceq"} component={CeqPage} />
      {/* Quals */}
      <Route path={"/javascript"}>
        <AddingPage pageTitle={"JavaScript"} pageContent={"Javascript qualification description page"}/>
      </Route>
      <Route path={"/python"}>
        <AddingPage pageTitle={"Python"} pageContent={"Python qualification description page"}/>
      </Route>
      <Route path={"/swift"}>
        <AddingPage pageTitle={"Swift"} pageContent={"Swift qualification description page"}/>
      </Route>
      {/* Certificates */}
      <Route path={"/certificateJavascript"}>
        <AddingPage pageTitle={"JavaScript"} pageContent={"Javascript certificate description page"}/>
      </Route>
      <Route path={"/certificatePython"}>
        <AddingPage pageTitle={"Python"} pageContent={"Python certificate description page"}/>
      </Route>
      <Route path={"/certificateSwift"}>
        <AddingPage pageTitle={"Swift"} pageContent={"Swift certificate description page"}/>
      </Route>
      {/* Contacts */}
      <Route path={"/alfarabi"}>
        <AddingPage pageTitle={"Alfarabi Sagaidullaev"} pageContent={"Alfarabi Sagaidullaev contacts page (no contacts, as you see)"}/>
      </Route>
      <Route path={"/egor"}>
        <AddingPage pageTitle={"Egor Burkenya"} pageContent={"Egor Burkenya contacts page (no contacts, as you see)"}/>
      </Route>
      <Route path={"/"} component={MainPage} />
    </Switch> 
  );
};

export default Main;