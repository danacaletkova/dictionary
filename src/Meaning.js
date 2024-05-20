import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <span className="fw-bold">{props.meaning.definition}</span><br/>
      <i>{props.meaning.example}</i>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
