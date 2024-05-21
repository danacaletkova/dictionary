import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p>{props.meaning.definition}</p>
      <i>{props.meaning.example}</i>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
