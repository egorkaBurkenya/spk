import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import style from "./CeqPage.module.css";

const JavaScriptTest = () => {

    const test = [
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

    const [userAnswers, setUserAnswers] = useState({});

    const addAnswer  = (qusionNumber) => {
        return e => {
            if (e.target.checked) {
                setUserAnswers({...userAnswers, [qusionNumber]: e.target.id})
            } else {
                setUserAnswers({...userAnswers, [qusionNumber]: ""})
            }
        }
    }

    let level;
    if (localStorage.level === undefined || localStorage.level === "") {
        level = "Пройдите тестирование"
    } else {
        level = localStorage.level;
    }
    return (
        <div className={style.testPage}>
            <div className={style.test__header}>
                <Link to={"/ceq"} className={style.test__backBtn}>Назад</Link>
                <h1> Оценка уровня владения JavaScript </h1>
                <div className={style.test__userLevel}>
                    <p>
                        <span onClick={() => console.log(userAnswers)}>level:</span> {level}
                    </p>
                </div>
            </div>
            <div className={style.test__window}>
                {test.map(qusion => 
                <div className={style.test__qusion}>
                    <h2>{qusion.number}. {qusion.qusion}</h2>
                    {qusion.answers.map(answ => 
                    <div className={style.test__answer}>
                        <input 
                        onClick={addAnswer(qusion.number)} 
                        type="radio" 
                        id={answ} 
                        name={qusion.qusion} />
                        <label htmlFor={answ}>{answ}</label>
                    </div>
                    )}
                </div>)
            }
            </div>
        </div>
    );
};

export default JavaScriptTest;