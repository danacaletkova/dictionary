import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("dictionary");

  function getKeyword(event) {
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} placeholder={keyword} onChange={getKeyword} />
      </form>
    </div>
  );
}
