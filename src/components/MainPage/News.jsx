import React from 'react';
import style from './MainPage.module.css'

import {useHistory} from "react-router";

const Card = ({news, newsPath ,newsImg, newsText, key}) => {

  const history = useHistory();

  console.log(news)

  return (
    <div onClick={() => history.push(newsPath)} className={style.newsItem} key={key}>
        <img className={style.newsImg} src={newsImg} alt="card"/>
        <p className={style.cardText}>{newsText}</p>
    </div>
  );
};

export default Card;