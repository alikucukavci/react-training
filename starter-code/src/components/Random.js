import React from 'react'

const Random = props => {
    const text = {
        textA: "1 and 6",
        textB: "1 and 100"
        
    };
    return (
        <div className="Greetings">
            <p className="GreetingsBox"> Random value between {props.min} and {props.max} => {Math.floor( Math.random() * (props.max - props.min) + props.min)} </p>  
        </div>
    )
}

export default Random
