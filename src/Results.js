import React from 'react';
import Meaning from "./Meaning";
 import "./Results.css";

export default function Results (props) {
    if(props.data !== null) {
           return (
<div className="results">
    <div className="word">{props.data.word}</div>
  <div className="phonetics"> 
  <a className="audio" href={props.data.phonetics[0].audio} target="_blank" rel="noreferrer"><i className="fas fa-volume-up"></i></a><span className="text">{props.data.phonetics[0].text}</span>
  </div>
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