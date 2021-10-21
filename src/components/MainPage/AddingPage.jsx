import React from 'react';
import style from './MainPage.module.css'
import {Link} from 'react-router-dom';

const AddingPage = ({pageTitle, pageContent}) => {

  return (
    <div className={style.addingPage}>
      <Link to={"/"} className={style.test__backBtn}>Назад</Link>
      <h2 className={style.sectionTitle}>{pageTitle}</h2>
      <p className={style.pageContent}>{pageContent}</p>
    </div>
  );
};

export default AddingPage;