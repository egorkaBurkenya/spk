import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import style from './MainPage.module.css'
import Card from './Card.jsx'
import NewsList from './NewsList.jsx'
import javascriptImg from './assets/javascript.png'
import pythonImg from './assets/python.png'
import swiftImg from './assets/swift.png'
import certificate from './assets/certificate.jpg'
import Alfarabi from './assets/Альфараби.jpg'
import Egor from './assets/Егор.jpg'

const MainPage = () => {

    const history = useHistory()
    const [newsList, setNewsList] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    let url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2021-10-18&' +
          'sortBy=popularity&' +
          'apiKey=56d838460080421db7466c1691c0b89f';

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data')
              }
            return res.json()
        })
        .then(data => {
            setNewsList(data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }, [url])

    return (
        <div className={style.mainPage}>
            <h1 className={style.mainTitle}>IDK</h1>
            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <p style={{fontSize: "20px"}}>
                Сайт сделан в рамках учебной практики.
                все карточки кликабельны, но контент в них пока не имеет логического смысла.
                </p>
            </div>
            <header className={style.quals}>
                <h2 className={style.sectionTitle}>Квалификации</h2>
                <div className={style.cards}>
                    <Card cardPath={"/javascript"} cardImg={javascriptImg} cardText="Javascipt 2021 qualification - тут должно быть описани квалификации"/>
                    <Card cardPath={"/python"} cardImg={pythonImg} cardText="Python 2021 qualification - тут должно быть описани квалификации"/>
                    <Card cardPath={"/swift"} cardImg={swiftImg} cardText="Swift 2021 qualification - тут должно быть описани квалификации"/>
                </div>
            </header>

            <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                <p style={{fontSize: "20px"}}>
                Для прохождения тестирование, нужно нажать кнопку расположенную ниже.
                <ul>
                    <li>Выберите Любой из тестов</li>
                    <li>После прохождения остностиельно кол-во правильных ответов, вас перенаправит на соответсвующий вашему уровню ресурс</li>
                    <li>В левом верхнем углу будет отображен уровень, полученный за прошлое прохождение теста</li> 
                    <li>В случае наилучшего прохождения теста (65-100% правильных ответов) вас перенаправит на экзамен, где вы сможете получить сертификат </li>
                </ul>
                </p>
            </div>

            <section className={style.ceq}>
                <button onClick={() => history.push('/ceq')} className={style.ceqButton}>Получить квалификацию</button>
            </section>
            <section className={style.docs}>
                <h2 className={style.sectionTitle}>Документы</h2>
                <div className={style.cards}>
                    <Card cardPath={"/certificateJavascipt"} cardImg={certificate} cardText="Javascipt 2021 certificate"/>
                    <Card cardPath={"/certificatePython"} cardImg={certificate} cardText="Python 2021 certificate"/>
                    <Card cardPath={"/certificateSwift"} cardImg={certificate} cardText="Swift 2021 certificate"/>
                </div>
            </section>
            <section className={style.news}>
                <h2 className={style.sectionTitle}>Новости</h2>
                <div className={style.newsList}>
                   {isLoading && <h2>Fetching news...</h2>}
                   {!isLoading && <NewsList newsList={newsList}/>}
                </div>
            </section>
            <footer className={style.contacts}>
                <h2 className={style.sectionTitle}>Разработчики</h2>
                <div className={style.cards}>
                    <Card cardPath={"/Alfarabi"} cardImg={Alfarabi} cardText="Alfarabi Sagaidullaev"/>
                    <Card cardPath={"/Egor"} cardImg={Egor} cardText="Egor Burkenya"/>
                </div>
            </footer>
        </div>
);
};

export default MainPage;