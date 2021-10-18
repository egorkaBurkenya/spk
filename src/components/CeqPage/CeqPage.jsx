import React, {useState} from 'react';
import { Route, Switch} from "react-router-dom";
import CeqMainPage from "./CeqMainPage"
import JavaScriptTest from "./JavaScriptTest"

const CeqPage = () => {

    const [test, setTest] = useState(
        { "javaSctipr" : [
        {   
            uid: 0,
            qestion: "Ты гей",
            answers: ["Да", "Может быть", "Не уверен", "Точно да"],
            rightAnswers: {
                "Дa": false,
                "Может быть": false,
                "Не уверен": false,
                "Точно да": true
            }
        },
        {   
            uid: 1,
            qestion: "Что такое гей?",
            answers: ["Стиль", "Я", "мой отец", "смысл жить"],
            rightAnswers: {
                "Стиль": false,
                "Я": false,
                "мой отец": false,
                "смысл жить": true
            }
        }
    ]})

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