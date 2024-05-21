import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        {props.synonyms.map((synonym, index) => {
          return (
            <div key={index} className="synonym">
              {synonym}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
