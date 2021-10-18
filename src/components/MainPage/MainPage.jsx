import React from 'react';
import style from './MainPage.module.css'
import Card from './Card.jsx'
import javascriptImg from './assets/javascript.png'
import pythonImg from './assets/python.png'
import swiftImg from './assets/swift.png'

const MainPage = () => {
    return (
        <div className={style.mainPage}>
            <header className={style.quals}>
                <h2 className={style.sectionTitle}>Квалификации</h2>
                <div className={style.qualCards}>
                    <Card cardPath={"/javascript"} cardImg={javascriptImg} cardText="Javascipt 2021 qualification"/>
                    <Card cardImg={pythonImg} cardText="Python 2021 qualification"/>
                    <Card cardImg={swiftImg} cardText="Swift 2021 qualification"/>
                </div>
            </header>
            <section className={style.ceq}></section>
            <section className={style.docs}></section>
            <section className={style.news}></section>
            <footer className={style.contacts}></footer>
        </div>
);
};

export default MainPage;