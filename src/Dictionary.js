import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("dictionary");

  function displayResults(response) {
    console.log(response.data);
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
          placeholder={keyword}
          onChange={getKeyword}
        />
      </form>
    </div>
  );
}