import React from 'react';
import Tip from './Tip.js';


let anterior = false;
let siguiente = false;

export default class Game extends React.Component{
    render(){
        if(this.props.currentQuestion === 0){
            anterior = true;
        }else {
            anterior = false;
        }
        if(this.props.currentQuestion === 9){
            siguiente = true;
        }else{
            siguiente = false;
        }
        return (
            <div>

                <div className="conjunto">
                    <h2>{this.props.question.question}: {}</h2>
                    <input className="center3" type="text" value={this.props.question.userAnswer || ''} onChange={ e =>{
                        this.props.onQuestionAnswer(e.target.value);
                    }}/>

                      <h3>Tips:</h3>
                  
                  

                    {this.props.tips.map((tip) =>
                        <Tip key={tip} tip = {tip}/>
                    )}
                </div>

                    <img src= {this.props.image} />
                

              
                <div>
                <div className = "buttons">
                <div >
                    <button id = "anterior" disabled={anterior} onClick={()=>{
                        this.props.onChangeQuestion(-1);
                    }}>Anterior</button>
                    <button id="siguiente" disabled={siguiente} onClick={() =>{
                        this.props.onChangeQuestion(1);
                    }}>Siguiente</button>
                </div>

                <div>
                    </div>
                    <button id = "submit" onClick={()=>{
                        this.props.submit();
                    }}>Submit</button>
                </div>
                </div>
            </div>
        );
    }
}