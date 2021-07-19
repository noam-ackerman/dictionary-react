import React, { useState } from "react";
import "./Dictionary.css";


export default function Dictionary () {
    let [wordInput, setWordInput] = useState ("");

    function handleInputChange (e) {
        setWordInput (e.target.value);
    }

    function search (e) {
        e.preventDefault ();
    }
    return (<div className="wordSearch">
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a Word..." size="30" autoComplete="off" className="word-input" onChange={handleInputChange}/> {""}
            <input type="submit" value="Search" className="search-button"></input>
        </form>
    </div>);
}