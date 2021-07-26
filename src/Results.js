import React from 'react';
import Meaning from "./Meaning";
 import "./Results.css";

export default function Results (props) {
    if(props.data !== null) {
           return (
<div className="results">
    <div className="word">{props.data.word}</div>
    <div className="phonetics">{props.data.phonetics[0].text}</div>
    {props.data.meanings.map(function(meaning,index) {
        return ( <div key={index}>
            <Meaning meaning={meaning}/>
            </div>);
    })}
    </div>
    );
    } else {
        return null;
    }
}