import React, {useState} from 'react';
import { Route, Switch} from "react-router-dom";
import CeqMainPage from "./CeqMainPage"
import JavaScriptTest from "./JavaScriptTest"

const CeqPage = () => {
    return (
        <Switch>
            <Route path={"/ceq/javascript"} component={JavaScriptTest} />
            {/* <Route path={"/ceq/python"} component={} />
            <Route path={"/ceq/swift"} component={} />  */}
            <Route path={"/ceq"} component={CeqMainPage} />
        </Switch>
    );
};

export default CeqPage;