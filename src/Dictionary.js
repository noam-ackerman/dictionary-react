import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";


export default function Dictionary () {
let [wordInput, setWordInput] = useState ("");
let[results, setResults] = useState (null);
let [photos, setPhotos] = useState (null);

function handleResponse (response){
    setResults (response.data[0]);
}

function handlePexelsResponse (response) {
setPhotos(response.data.photos);
}

    function handleInputChange (e) {
        setWordInput (e.target.value);
    }

    function search () {
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordInput}`;
         axios.get(apiUrl).then(handleResponse);

          let pexelsApiKey="563492ad6f91700001000001bd6661cbf4d4406a8bf68f3e850e1144";
          let pexelsApiUrl= `https://api.pexels.com/v1/search?query=${wordInput}&per_page=6`;
          axios.get(pexelsApiUrl, { headers: {"Authorization" : `Bearer ${pexelsApiKey}`}}).then(handlePexelsResponse);
    }

  
    function handleSubmit (event){
        event.preventDefault();
        search();
    }

    let form =  <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Type a Word..." size="30" autoComplete="off" className="word-input" onChange={handleInputChange}/> {""}
            <input type="submit" value="Search" className="search-button"></input>
        </form> ;

    return (
    <div className="wordSearch">
      {form}
        <Results data={results} photos={photos}/>
    </div>
    );
}