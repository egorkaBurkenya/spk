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

    const links = {
        javascript: {
            junior: "https://github.com/azat-io/you-dont-know-js-ru/blob/master/up%20%26%20going/README.md#%D0%92%D1%8B-%D0%BD%D0%B5-%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5-js-%D0%9D%D0%B0%D1%87%D0%BD%D0%B8%D1%82%D0%B5-%D0%B8-%D0%A1%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%D1%81%D1%8C",
            middle: "https://github.com/azat-io/you-dont-know-js-ru/blob/master/scope%20%26%20closures/README.md#%D0%92%D1%8B-%D0%BD%D0%B5-%D0%B7%D0%BD%D0%B0%D0%B5%D1%82%D0%B5-js-%D0%9E%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C-%D0%B2%D0%B8%D0%B4%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B8-%D0%B8-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F",
            senier: "https://github.com/azat-io/you-dont-know-js-ru/blob/master/es6%20%26%20beyond/README.md#you-dont-know-js-es6--beyond"
        },
        python: {
            junior: "https://metanit.com/python/tutorial/",
            middle: "https://metanit.com/python/tutorial/6.1.php",
            senier: "https://metanit.com/python/tutorial/9.1.php"
        },
        swift: {
            junior: "https://www.chitai-gorod.ru/catalog/book/1214143/?utm_source=google&utm_medium=cpc&utm_campaign=Beta_PLA_rf&utm_term=&utm_content=g|position|u|||ad|270933252449||device|c|geo||9047030|cid|1410957570|gid|54935583029|pla-1070504252837&gclid=CjwKCAjwn8SLBhAyEiwAHNTJbbsde6j8EM8sXJCP2GThu9mkQhdr2Xu11FZ1w52TwcQ-tzBOvbC1-RoCRtIQAvD_BwE",
            middle: "https://www.chitai-gorod.ru/catalog/book/1214143/?utm_source=google&utm_medium=cpc&utm_campaign=Beta_PLA_rf&utm_term=&utm_content=g|position|u|||ad|270933252449||device|c|geo||9047030|cid|1410957570|gid|54935583029|pla-1070504252837&gclid=CjwKCAjwn8SLBhAyEiwAHNTJbbsde6j8EM8sXJCP2GThu9mkQhdr2Xu11FZ1w52TwcQ-tzBOvbC1-RoCRtIQAvD_BwE",
            senier: "https://www.chitai-gorod.ru/catalog/book/1214143/?utm_source=google&utm_medium=cpc&utm_campaign=Beta_PLA_rf&utm_term=&utm_content=g|position|u|||ad|270933252449||device|c|geo||9047030|cid|1410957570|gid|54935583029|pla-1070504252837&gclid=CjwKCAjwn8SLBhAyEiwAHNTJbbsde6j8EM8sXJCP2GThu9mkQhdr2Xu11FZ1w52TwcQ-tzBOvbC1-RoCRtIQAvD_BwE"
        }
    }

    return (
        <Switch>
            <Route path={"/ceq/javascript"}>
            <Test 
                test={javascriptTest} 
                title={"Оценка уровня владения JavaScript"}
                level={"levelJs"}
                links = {links.javascript}
                />
            </Route>
            <Route path={"/ceq/python"}>
            <Test 
                test={pythonTest} 
                title={"Оценка уровня владения Python"}
                level={"levelPython"}
                links = {links.python}
                />
            </Route>
            <Route path={"/ceq/swift"}>
            <Test 
                test={swiftTest} 
                title={"Оценка уровня владения Swift"}
                level={"levelSwift"}
                links = {links.swift}
                />
            </Route> 
            <Route path={"/ceq"} component={CeqMainPage} />
        </Switch>
    );
};

export default CeqPage;