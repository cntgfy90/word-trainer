import React from 'react';
import FirstMode from './FirstMode';
import GameMode from './GameMode';
import FinalMode from './FinalMode';

export default class TrainerApp extends React.Component {
    constructor(props) {
        super(props);

        this.handleChangeMode = this.handleChangeMode.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.generateListChars = this.generateListChars.bind(this);

        this.state = {
            mode: 1,
            listChars: '',
            errors: 0,
            isCorrect: true
        };
    }

    handleChangeMode(mode) {
        mode === 2 && this.setState(() => ({ errors: 0 }));
        this.setState(() => ({ mode }));
    }

    handleCheck(e) {
        const { listChars } = this.state;

        if (listChars.length <= 1) {
            this.setState(() => ({ mode: 3 }));
        }

        if (e.key === Array.from(listChars[0]).toString()) {
            this.setState((prevState) => ({
                listChars: Array.from(prevState.listChars).splice(1),
                isCorrect: true
            }))
        } else {
            this.setState((prevState) => ({
                errors: prevState.errors + 1,
                isCorrect: false
            }));
        }
    }

    generateListChars() {
        this.setState(() => ({
            listChars: Math.random().toString(36).substring(2)
        }));
    }

    render() {
        const { mode, listChars, errors, isCorrect } = this.state;

        return (
            <div className="trainer">
                {
                    mode === 1 
                    && 
                    <FirstMode
                        handleChangeMode={this.handleChangeMode}
                    />
                }              
                {
                    mode === 2
                    &&
                    <GameMode
                        handleCheck={this.handleCheck}
                        handleChangeMode={this.handleChangeMode}
                        generateListChars={this.generateListChars}
                        listChars={listChars}
                        errors={errors}
                        isCorrect={isCorrect}
                    />
                }
                {
                    mode === 3
                    &&
                    <FinalMode
                        handleChangeMode={this.handleChangeMode}
                        listChars={listChars}
                        errors={errors}
                    />
                }
            </div>
        );
    }
}
