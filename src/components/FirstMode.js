import React from 'react';

const FirstMode = ({ handleChangeMode }) => (
    <div className="trainer__start">
        <button className="trainer__btn" onClick={ () => handleChangeMode(2) }>
            Старт
        </button>
    </div>
);

export default FirstMode;