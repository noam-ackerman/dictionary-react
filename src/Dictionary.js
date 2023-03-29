import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [wordInput, setWordInput] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(data) {
    setPhotos(data.photos);
  }

  function handleInputChange(e) {
    setWordInput(e.target.value);
  }

  function search() {
    let pexelsApiKey = "Wdrg3QnNJuL73cSqE7AfFqjsYG03OhFDFyoWZVFwvRjeBbl5X09pOyzX";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${wordInput}&per_page=6`;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${wordInput}`;
    axios.get(apiUrl).then(handleResponse).then(() => {
      fetch(pexelsApiUrl, {
        headers: {
          Authorization: pexelsApiKey
        }
      }).then(resp => {
      return resp.json()
      }).then(data => {
        handlePexelsResponse(data)
      })
    });
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
