import React from 'react';
import './App.css';

let cond = false;

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minutes: 2,
            seconds: 0,
        };
        this._handleStartClick = this._handleStartClick.bind(this);
    }
    _handleStartClick() {
        if (!this.cond) {
            this.interval = setInterval(() => {
                this.tick();
            }, 1000);
            this.cond = true;
        }
    }

    tick() {

        let seconds = this.state.seconds;
        let minutes = this.state.minutes;

        if (minutes === 0 && seconds === 0) {
            this.props.submit();
            clearInterval(this.interval);
        }

        if (seconds === 0) {
            seconds = 60;
            minutes = minutes - 1;
        }
        seconds = seconds - 1;
            this.setState({
                seconds: seconds,
                minutes: minutes
            });
        }
    zeroPad(value) {
        return value < 10 ? `0${value}` : value;
    }
    render() {
        this._handleStartClick();
        return (
            <div>
                <div >

                    <div className="numbers">
                        <span>{this.zeroPad(this.state.minutes)}:</span>
                        <span>{this.zeroPad(this.state.seconds)} </span>

                    </div>
                </div>

            </div>);
    }
}

