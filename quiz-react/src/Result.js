import React from 'react';
import Tip from './Tip.js';
export default class Game extends React.Component{
    render(){
        
        return (
              
           
            
            <div>
               
                <h2> Score: </h2>
                <h3>{this.props.score}/10</h3>
            
               

            </div>
             
        );
    }
}