import React from 'react'

const Greetings = props => {
    const greetings = {
    de: "Hallo",
    fr: "Bonjour",
    en: "Greetings",
    sw: "Heysan",
  };
    return (
        <div className="Greetings">
            <p className="GreetingsBox"> {greetings[props.lang]} {props.children}</p>   
        </div>
    )
}

export default Greetings
