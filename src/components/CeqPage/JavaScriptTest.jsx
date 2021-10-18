import React, {useState} from 'react';
import style from './CeqPage.module.css';

const JavaScriptTest = () => {

    const [qustionUid, _setQustionUid] = useState(0);
    const setQustionUid = (uid) => () => {
        _setQustionUid(uid)
        console.log(userAnswers);
    }

    const [userAnswers, setUserAnswers] = useState({})
    const setUserAnswer = (uid, answer) => (e) => {
        setUserAnswers({...userAnswers, [e.target.name]: {
            answer: answer,
            uid: uid
        }})
    }

    const test = [
        {   
            uid: 0,
            qestion: "Какая типизация в JavaScript? ",
            answers: ["Строгая", "Не строгая", "Гибкая", "Вариативная"],
            rightAnswers: "Строгая"
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
    ]

    return (
        <div className={style.ceqPage}>
            <h1 className={style.title}>
                Тест на знания JavaScript
            </h1>
            <p className={style.description} style={{
                width: "50%"
            }}>
            JavaScript — мультипарадигменный язык программирования. 
            Поддерживает объектно-ориентированный, императивный и функциональный стили.
            Является реализацией спецификации ECMAScript. 
            JavaScript обычно используется как встраиваемый язык для программного доступа 
            к объектам приложений. <br/><br/> 
            <p style={{
                color: "", 
                margin: "5px",
                borderBottom: "1px solid #999",  
                paddingBottom: "5px",
                fontSize: "20px"
                }}>Пройдите тест для определения вашего уровня </p>
            </p>
            <div className={style.test}>
                {test.map(qestion => {
                    return (
                        <div style={{
                            display: qustionUid !== qestion.uid && 'none'
                            }}
                            className={style.qestion}>
                            <h2 className={style.qestion__title}>
                                {qestion.qestion}
                            </h2>
                            <div className={style.answers}>
                                {qestion.answers.map(answer => {
                                    const uid = Date.now().toString()
                                    return (
                                        <div className={style.answer}>
                                        <input 
                                        name={qestion.qestion}
                                        type="checkbox" 
                                        id={uid}
                                        // value={false}
                                        onChange={setUserAnswer(qestion.uid, answer)}
                                          />
                                        <label htmlFor={uid}>{answer}</label> 
                                        </div>
                                    )
                                })} 
                            </div>
                            <div className={style.nav}>
                                <button onClick={
                                    setQustionUid(qestion.uid !== 0 ? qestion.uid - 1 : test.length - 1)}>
                                        Назад
                                    </button>
                                <button onClick={
                                    setQustionUid(qestion.uid !== test.length - 1 ? qestion.uid + 1 : 0)}>
                                        Следующий вопрос
                                </button>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
};

export default JavaScriptTest;