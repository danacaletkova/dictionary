import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span>Synonyms:</span>
        {props.synonyms.map((synonym, index) => {
            return(
            <div key={index}>{synonym}</div>
        );
})}      
        </div>
    );
  } else {
    return null;
  }
}