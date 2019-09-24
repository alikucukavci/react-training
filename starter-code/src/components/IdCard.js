import React from 'react';

const IdCard = props => {
    return (
        <div className="IdCard">
            <div>
                <img src={props.data.picture}
 alt=""/>
            </div>
            <div>
            <p>First name: {props.data.firstName}</p>
            <p> Last name: {props.data.lastName}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Height: {props.data.height} </p>
                <p>Birth: {props.data.birth} </p>
                </div>
        </div>
    );
};

export default IdCard;
