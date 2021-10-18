import React from 'react';
import style from './CeqPage.module.css';

import javascriptImg from '../MainPage/assets/javascript.png'
import pythonImg from '../MainPage/assets/python.png'
import swiftImg from '../MainPage/assets/swift.png'
import Card from "../MainPage/Card"

const CeqMainPage = () => {
    return (
        <div className={style.ceqPage}>
            <h1 className={style.title}>
                Оценка уровня знания языка
            </h1>
            <p className={style.description}>
                Выберите язык, по которому хотите пройти квалификацию
            </p>
            <div className={style.buttons}>
                <Card cardPath={"/ceq/javascript"} cardImg={javascriptImg} cardText="Javascipt 2021 qualification"/>
                <Card cardPath={"/ceq/python"} cardImg={pythonImg} cardText="Python 2021 qualification"/>
                <Card cardPath={"/ceq/swift"} cardImg={swiftImg} cardText="Swift 2021 qualification"/>
            </div>
        </div>
    );
};

export default CeqMainPage;