import React from "react";
import "./Results.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div>
        <div className="synonymsTitle">Similar:</div>
        <div className="synonymsList">
          {props.synonyms.map((synonym, index) => {
            return (
              <span key={index} className="synonym">
                {synonym} <strong>•</strong>{" "}
              </span>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
