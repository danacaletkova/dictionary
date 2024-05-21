import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms mt-3">
        {props.synonyms.map((synonym, index) => {
          return (
            <a
              key={index}
              className="synonym"
              href={`https://www.google.com/search?q=${synonym}`}
              target="_blank"
              rel="noreferrer"
            >
              {synonym}
            </a>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
