import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  function formatPhonetic(phonetic) {
    if (phonetic) {
      return <h3>/{phonetic}/</h3>;
    } else {
      return <h3>{""}</h3>;
    }
  }

  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        {formatPhonetic(props.results.phonetic)}
        {props.results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
