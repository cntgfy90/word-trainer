import React from 'react';
import Results from './Results';

const FinalMode = ({ listChars, handleChangeMode, errors }) => (
    <div>
        <Results 
            listChars={listChars}
            errors={errors}
            title="Произведено"
        />
        <button className="trainer__btn" onClick={ () => handleChangeMode(2) }>Старт</button>
    </div>
);

export default FinalMode;