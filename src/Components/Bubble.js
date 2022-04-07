import React from 'react';


export default function Bubble(props) {

    const bubbleStyle = {
        alignSelf: props.sent === true ? "flex-end" : "flex-start",
        backgroundColor: props.sent === true ? "#1b3632" : "#2F3E46",
    };

    const timestampStyle = {
        display: "flex",
        justifyContent: props.sent === true ? "flex-start" : "flex-end",
    };

    return (
        <div className="bubble-container">
            <div className="bubble" style={bubbleStyle}>
                <p>{props.content}</p>
                <p style={timestampStyle}>{props.timestamp}</p>
            </div>
        </div>
    );
}