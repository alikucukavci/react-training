import React from 'react'

const BoxColor = props => {
    return (
        <div style={
            {
                "background-color": `rgb(${props.r}, ${props.g},${props.b})`
            }
        }>
            <p>rgb({props.r},{props.g},{props.b})</p>
            <p>
                #{props.r.toString(16).length === 1 ? "0" + props.r.toString(16) : props.r.toString(16)}
                
                {props.g.toString(16).length === 1 ? "0" + props.g.toString(16) : props.g.toString(16)}
                
                {props.b.toString(16).length === 1 ? "0" + props.b.toString(16) : props.b.toString(16)}
                </p>
        </div>
    )
}

export default BoxColor
