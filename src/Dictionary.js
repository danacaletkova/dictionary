import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("hello");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function displayResults(response) {
    setResults(response.data);
  }

  function search() {
        let apiKey = "5o168182b8atd0a481fedf7024b43479";
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
        axios.get(apiUrl).then(displayResults);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
      return (
        <div className="Dictionary">
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              placeholder="Search dictionary"
              defaultValue={keyword}
              onChange={getKeyword}
            />
          </form>
          <Results results={results} />
        </div>
      );
  } else {
    load();
  }
}