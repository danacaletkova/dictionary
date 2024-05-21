import React, { useState } from "react";
import axios from "axios";
import { createClient } from "pexels";
import searchBtn from "./search-btn.png";
import Results from "./Results";
import Gallery from "./Gallery";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("coffee");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function displayResults(response) {
    if (response.data.status === "not_found") {
      alert(
        `Sorry, we have no definitions for '${keyword}' in our dictionary.`
      );
    } else {
      setResults(response.data);
    }
  }

  function displayPhotos(response) {
    setPhotos(response.photos);
  }

  function search() {
    let apiKey = "5o168182b8atd0a481fedf7024b43479";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(displayResults);

    let client = createClient(
      "a4PKlDEqKRJdsBfh5LbicTVZezsRw1vjUSqKERhhDxq4ARXXZg8RlWEt"
    );
    let query = keyword;
    client.photos.search({ query, per_page: 9 }).then(displayPhotos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function getKeyword(event) {
    setKeyword(event.target.value.split(" ").join(""));
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
            required
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
        <Gallery photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
