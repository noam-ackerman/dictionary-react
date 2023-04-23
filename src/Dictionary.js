import React, { useState } from "react";
import Results from "./Results";
import "./Dictionary.css";
import { Oval } from 'react-loader-spinner'

function reducer(state, action) {
  switch (action.type) {
    case "pending" : {
      return {status:"pending", results:null, error:null}
    }
    case "resolved" : {
      return {status: "resolved",results: action.data, error:null}
    }
    case "rejected" : {
     return {status: "rejected",results: null, error:action.error}
    }
     default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default function Dictionary() {
  const [wordInput, setWordInput] = useState("");
  const [state, dispatch] = React.useReducer(reducer, {status: "idle",results: null, error:null});
  const [photos, setPhotos] = useState(null);


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
    dispatch({type: "pending"})
    fetch(apiUrl).then(async resp => {
      const data = await resp.json()
      if (resp.ok) {
        dispatch({type: "resolved", data: data[0]})
        fetch(pexelsApiUrl, {
          headers: {
            Authorization: pexelsApiKey
          }
        }).then(response => {
        return response.json()
        }).then(respData => {
          handlePexelsResponse(respData)
        })
      } else {
        dispatch({type: "rejected", error:data})
      }
    })
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
      <button type="submit" className="search-button" disabled={wordInput.length === 0}>Search</button>
    </form>
  );


  return (
    <div className="wordSearch">
      {form}
      {state.status === "pending" ?
       <div className="loader">
        <Oval
        height={100}
        width={100}
        color="#fe8924"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#fe8924"
        strokeWidth={2}
        strokeWidthSecondary={2}

      />
       </div>
      : state.status === "resolved" ?
       <Results data={state.results} photos={photos} />
      : state.status === "rejected" ?
       <div className="error-message"> {state.error.message}</div>
      : null
      }    
    </div>
  );
}
