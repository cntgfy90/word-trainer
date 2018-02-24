import React from 'react';
import Countdown from 'react-countdown-now';
import moment from 'moment';
import uuid from 'uuid';
import Results from './Results';

export default class GameMode extends React.Component {
    constructor(props) {
        super(props);

        this.handleTick = this.handleTick.bind(this);

        this.state = {
            date: moment().add(4, 'minutes'),
            pastTime: 0
        };
    }

    componentDidMount() {
        this.props.generateListChars();
    }

    handleTick() {
        this.setState((prevState) => ({ pastTime: prevState.pastTime + 1 }));
    }

    render() {
        const { date, pastTime } = this.state;
        const { handleChangeMode, errors, listChars, handleCheck, isCorrect } = this.props;
        return (
            <div className="trainer__game">
                <h3 className="trainer__text">Осталось времени:
                    <Countdown
                        date={ date.toLocaleString() }
                        onComplete={ () => handleChangeMode(3) }
                        onTick={this.handleTick}
                    />
                </h3>
                <h3 className="trainer__text">Прошло времени: { pastTime } секунд</h3>
                <Results 
                    errors={errors}
                    listChars={listChars}
                    title="Кол-во"
                />
                {
                    Array.from(listChars).map((char, index) => {
                        return <textarea
                                    key={uuid()}
                                    className={ isCorrect || index !== 0 ? "trainer__textarea" : "trainer__textarea-current" }
                                    onKeyUp={ handleCheck }
                                    autoFocus
                                    readOnly
                                    value={ char }
                                >
                                </textarea>
                    })
                }
                <button className="trainer__btn" onClick={ () => handleChangeMode(3) }>
                    Закончить
                </button>
        </div>
        );
    }  
}