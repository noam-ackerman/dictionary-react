import React from 'react';

export default function Results (props) {
    if(props.data !== null) {
            console.log(props.data);
           return (
<div className="results">{props.data.word}</div>
    );
    } else {
        return null;
    }
}