import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [wordInput, setWordInput] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.photos);
  }

  function handleInputChange(e) {
    setWordInput(e.target.value);
  }

  function search() {
    let pexelsApiKey = "Wdrg3QnNJuL73cSqE7AfFqjsYG03OhFDFyoWZVFwvRjeBbl5X09pOyzX";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${wordInput}&per_page=6`;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordInput}`;
    fetch(apiUrl).then(resp => {return resp.json()}).then(data => {
      handleResponse(data)
    }).then(() => {
      fetch(pexelsApiUrl, {
        headers: {
          Authorization: pexelsApiKey
        }
      }).then(resp => {
      return resp.json()
      }).then(data => {
        handlePexelsResponse(data)
      })
    }).catch(error => console.log("there is an error"));
   }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type a Word..."
        autoComplete="off"
        className="word-input"
        onChange={handleInputChange}
      />{" "}
      {""}
      <input type="submit" value="Search" className="search-button"></input>
    </form>
  );

  return (
    <div className="wordSearch">
      {form}
      <Results data={results} photos={photos} />
    </div>
  );
}
