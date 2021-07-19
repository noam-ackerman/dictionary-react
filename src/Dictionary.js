import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary () {
let [wordInput, setWordInput] = useState ("");

function handleResponse (response){
    console.log(response.data);

}

    function handleInputChange (e) {
        setWordInput (e.target.value);
    }

    function search (e) {
        e.preventDefault ();
      
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordInput}`;
         axios.get(apiUrl).then(handleResponse);
    }
    return (<div className="wordSearch">
        <form onSubmit={search}>
            <input type="search" placeholder="Search for a Word..." size="30" autoComplete="off" className="word-input" onChange={handleInputChange}/> {""}
            <input type="submit" value="Search" className="search-button"></input>
        </form>
    </div>);
}