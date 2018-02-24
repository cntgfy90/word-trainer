import React from 'react';

const Results = ({ errors, listChars, title }) => (
    <div>
        <h3 className="trainer__text">{ title } ошибок: { errors }</h3>
        <h3 className="trainer__text">Осталось символов: { listChars.length }</h3>
    </div>
);

export default Results;