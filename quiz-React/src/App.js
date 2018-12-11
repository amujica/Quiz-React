import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import Game from "./Game";

import Chronometer from "./Chronometer"
import {questionAnswer} from "./redux/actions";
import {changeQuestion} from "./redux/actions";
import {submit} from "./redux/actions";
import {initQuestions} from "./redux/actions";

let url = "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=32f3456e3e8df146f85c";
let comment = "You have finished the game!"

class App extends Component {
    componentDidMount(){
       fetch(url)
           .then((res)=> res.json())
           .then(data =>{
               return this.props.dispatch(initQuestions(data));
           })
    }

    render() {

        if(this.props.questions.length === 0){
            return (<h1>Loading...</h1>)
        }
        if (this.props.finished === false) {
        return (

            <div className="center">
                <h1> Question {this.props.currentQuestion +1 } </h1>
                <div className = "game">
                <Game question={this.props.questions[this.props.currentQuestion]}
                      image={this.props.questions[this.props.currentQuestion].attachment.url}
                      tips={this.props.questions[this.props.currentQuestion].tips}
                      onQuestionAnswer ={(answer) => {
                          this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
                      }}
                      onChangeQuestion={(a) => {
                          this.props.dispatch(changeQuestion(this.props.currentQuestion + a))
                      }}
                      score={this.props.score}
                      submit={() => {
                          this.props.dispatch(submit(this.props.questions))
                      }}
                      currentQuestion = {this.props.currentQuestion}
                />
                </div>
                <div className="chronometer">
                <Chronometer comment = {comment}
                             submit = {()=>{
                                 this.props.dispatch(submit(this.props.questions))
                }}/>
                </div>
            </div>
        );
        } else {
            return (
                <div>
                   
                    <h1>{comment}</h1>
                    Final score: {this.props.score}
                    <p>
                        <button id = "anterior"onClick={()=>{
                            this.props.dispatch(initQuestions(this.props.questions))
                        }}>Try again</button>
                        <button id="anterior"onClick={()=>{
                            window.location.reload(true);
                        }}>Reset</button>
                    </p>
              
                </div>
            );
        }
    }
}
function mapStateToProps(state){ //Con esta función recibimos el estado de Redux y lo tenemos en forma de props
    return {
        ...state
    }
}
export default connect(mapStateToProps)(App);
