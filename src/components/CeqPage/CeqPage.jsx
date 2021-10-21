import React, {useState} from 'react';
import { Route, Switch} from "react-router-dom";
import CeqMainPage from "./CeqMainPage";
import Test from "./Test";

const CeqPage = () => {

    const javascriptTest = [
        {
            number: 1,
            qusion: 'Какую типизацию имеет JavaScript?', 
            answers: [
                "Строгую",
                "Не строгую",
                "Гибкую", 
                "Обратную"
            ],
            rightAnswer: "Строгую"
        },
        {
            number: 2,
            qusion: 'Что такое карирование?', 
            answers: [
                "Функция, которая вызывает функцию",
                "Функция, которая вызывает саму себя",
                "Функция, которая возвращает функцию", 
                "Класс, который вызывает контруктор внутри себя"
            ],
            rightAnswer: "Функция, которая возвращает функцию"
        },
        {
            number: 3,
            qusion: 'В каком году появился JavaScript?', 
            answers: [
                "в сентябре 1995 года",
                "в октябре 1995 года",
                "в июне 1995 года", 
                "в октябре 2001 года"
            ],
            rightAnswer: "в сентябре 1995 года"
        }
    ]

    const pythonTest = [
        {
            number: 1,
            qusion: 'Какую типизацию имеет Python?', 
            answers: [
                "Строгую",
                "Не строгую",
                "Гибкую", 
                "Динамическую"
            ],
            rightAnswer: "Динамическую"
        },
        {
            number: 2,
            qusion: 'Что такое карирование?', 
            answers: [
                "Функция, которая вызывает функцию",
                "Функция, которая вызывает саму себя",
                "Функция, которая возвращает функцию", 
                "Класс, который вызывает контруктор внутри себя"
            ],
            rightAnswer: "Функция, которая возвращает функцию"
        },
        {
            number: 3,
            qusion: 'В каком году появился Python?', 
            answers: [
                "в начале 1995 года",
                "в конце 1995 года",
                "в июне 1995 года", 
                "в конце 1980 года"
            ],
            rightAnswer: "в конце 1980 года"
        }
    ]

    const swiftTest = [
        {
            number: 1,
            qusion: 'Какую типизацию имеет Swift?', 
            answers: [
                "статическая и динамическая",
                "статическая",
                "динамическая", 
                "строгая"
            ],
            rightAnswer: "строгая"
        },
        {
            number: 2,
            qusion: 'Что такое карирование?', 
            answers: [
                "Функция, которая вызывает функцию",
                "Функция, которая вызывает саму себя",
                "Функция, которая возвращает функцию", 
                "Класс, который вызывает контруктор внутри себя"
            ],
            rightAnswer: "Функция, которая возвращает функцию"
        },
        {
            number: 3,
            qusion: 'В каком году появился Swift?', 
            answers: [
                "3 мая 1973 г",
                "4 мая 1974 г",
                "5 мая 1975 г", 
                "6 мая 1976 г"
            ],
            rightAnswer: "3 мая 1973 г"
        }
    ]

    return (
        <Switch>
            <Route path={"/ceq/javascript"}>
            <Test 
                test={javascriptTest} 
                title={"Оценка уровня владения JavaScript"}
                level={"levelJs"}
                />
            </Route>
            <Route path={"/ceq/python"}>
            <Test 
                test={pythonTest} 
                title={"Оценка уровня владения Python"}
                level={"levelPython"}
                />
            </Route>
            <Route path={"/ceq/swift"}>
            <Test 
                test={swiftTest} 
                title={"Оценка уровня владения Swift"}
                level={"levelSwift"}
                />
            </Route> 
            <Route path={"/ceq"} component={CeqMainPage} />
        </Switch>
    );
};

export default CeqPage;