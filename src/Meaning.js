import React from "react";
import Synonyms from "./Synonyms";
import "./Results.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <div className="partOfSpeech">{props.meaning.partOfSpeech}</div>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">
              <em>{definition.example}</em>
            </div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
