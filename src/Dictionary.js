import React, { useState } from "react";
import axios from "axios";
import searchBtn from "./search-btn.png";
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
        <h1>What word would you like to look up?</h1>
        <form
          onSubmit={handleSubmit}
          className="d-flex align-items-center pb-5"
        >
          <input
            className="form-control search-input"
            type="search"
            autoFocus={true}
            placeholder="Search dictionary"
            defaultValue={keyword}
            onChange={getKeyword}
          />
          <img
            src={searchBtn}
            className="searchBtn"
            alt="search button"
            onClick={handleSubmit}
          />
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
