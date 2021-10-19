import React from 'react';
import style from './MainPage.module.css'

import {useHistory} from "react-router";

const Card = ({cardPath ,cardImg, cardText}) => {

  const history = useHistory();

  return (
    <div onClick={() => history.push(cardPath)} className={style.card}>
        <img className={style.cardImg} src={cardImg} alt="card"/>
        <p className={style.cardText}>{cardText}</p>
    </div>
  );
};

export default Card;