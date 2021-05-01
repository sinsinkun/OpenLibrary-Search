import { useState } from "react";

function Search() {

  const [title, setTitle] = useState("");

  function keyListen(e) {
    if (e.key === "Enter") searchTitle();
  }

  async function searchTitle() {
    // convert spaces to +
    console.log("performing search");
    return "temp";
  }

  return(
    <div className="search-area">
      <input className="search-entry" type="text" name="search" placeholder="Search for a book" 
        value={title} onChange={e => setTitle(e.target.value)} onKeyPress={e => keyListen(e)}/>
      <button onClick={searchTitle}>Search</button>
      <input type="checkbox" />
    </div>
  )
}

export default Search;