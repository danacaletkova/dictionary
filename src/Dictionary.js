import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(null);

  function displayResults(response) {
    setResults(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "5o168182b8atd0a481fedf7024b43479";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(displayResults);
  }

  function getKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Search dictionary"
          onChange={getKeyword}
        />
      </form>
      <Results results={results} />
    </div>
  );
}