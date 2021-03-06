import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import style from "./CeqPage.module.css";

const Test = (props) => {

    const history = useHistory();

    const test = props.test

    Object.size = function(obj) {
        var size = 0,
          key;
        for (key in obj) {
          if (obj.hasOwnProperty(key)) size++;
        }
        return size;
      };

    const [userAnswers, setUserAnswers] = useState({});
    const [userLevel, setUserLevel] = useState('');
    const addAnswer  = (qusionNumber) => {
        return e => {
            if (e.target.checked) {
                setUserAnswers({...userAnswers, [qusionNumber]: e.target.id})
            } else {
                setUserAnswers({...userAnswers, [qusionNumber]: ""})
            }
        }
    }

    const checkLevel = () => {
        const qustionsLength = test.length
        let rightAnswers = 0;
        console.log();
        if (Object.size(userAnswers) !== qustionsLength) {
            alert(`Пожалуйста ответе на все вопросы! \nвам осталось: ${test.length - Object.size(userAnswers)}`)
            return
        }
        
        test.map(qusion => {
            if (userAnswers[qusion.number] === qusion.rightAnswer) {
                rightAnswers += 1;
            } 
        })
        let url;
        const userLevelMath = Math.round(rightAnswers * 100 / qustionsLength)
        if (userLevelMath < 25) {
            setUserLevel('pre junior')
            localStorage[props.level] = "pre junior"
            url = props.links.junior
        }
        else if (userLevelMath >= 25 && userLevelMath <= 33) {
            setUserLevel('junior')
            localStorage[props.level] = "junior"
            url = url = props.links.junior 
        }
        else if (userLevelMath >= 34 && userLevelMath <= 66) {
            setUserLevel('middle')
            localStorage[props.level] = "middle"
            url = props.links.middle  
        }
        else if (userLevelMath >= 67 && userLevelMath <= 100) {
            setUserLevel('senior')
            localStorage[props.level] = "senior"
            url = props.links.senier   
        }
        if (props.type !== "ex") {
            alert(`Твой уровень: ${localStorage[props.level]} ${localStorage[props.level] == "senior" ? "Сейчас ты будешь перенаправлен на экзмаен" : ""}`)
        }
        if (localStorage[props.level] == "senior" || props.type === "ex") {
            history.push(url)
        } else window.location.replace(url)

    }

    let level;
    if (localStorage[props.level] === undefined || localStorage[props.level] === "") {
        level = "Пройдите тестирование"
    } else {
        level = localStorage[props.level];
    }
    return (
        <div className={style.testPage} style={{position: 'relative'}}>
            <div className={style.test__header}>
                <Link to={"/ceq"} className={style.test__backBtn}>Назад</Link>
                <h1> {props.title} </h1>
                <div className={style.test__userLevel}>
                    <p>
                        <span onClick={() => console.log(userAnswers)}>level:</span> {level}
                    </p>
                </div>
            </div>
            <h3 style={{margin: '0'}}>
                Правильные ответы(Для тестировки работы приложения)
            </h3>
            <ul>
                {test.map(q => <li>{q.number} {q.rightAnswer}</li>)}
            </ul>
            <div className={style.test__window} style={{overflow: 'auto'}}>
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
            <button onClick={checkLevel} className={style.test__checkBtn}>Узнать свой уровень!</button>
            </div>
        </div>
    );
};

export default Test;