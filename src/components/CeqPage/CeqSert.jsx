import React from 'react';
import {useHistory} from 'react-router-dom';

const CeqSert = ({lang, level}) => {

    const history = useHistory();
    if (localStorage[level] === undefined && localStorage[level] === '') {
        history.push('/ceq')
    }
    return (
        <div style={{
            width: '100wh', 
            height: '100vh', 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'}}>
            <h1>Ура! ты прошел квалификацию по {lang}!</h1>
            {/* <br /> */}
            <h2>Вот твой сертификат на уровень {localStorage[level]} 🐱‍👓</h2>
        </div>
    );
};

export default CeqSert;