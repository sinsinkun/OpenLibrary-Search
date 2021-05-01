import { useState } from "react";
import { useStoreContext } from '../redux';

function Search() {

  const [, dispatch] = useStoreContext();
  const [title, setTitle] = useState("");
  const [sortA, setSortA] = useState(false);
  const [sortDate, setSortDate] = useState(false);

  async function searchTitle(e) {
    e.preventDefault();

    // convert spaces to +
    const query = title.replace(" ", "+");
    const data = await fetch(`http://openlibrary.org/search.json?q=${query}`)
      .catch(err => {
        console.log(err);
      });
    // save data to global store
    dispatch({ do:"saveResults", data:data });

    // clean up
    setTitle("");
  }

  return(
    <div className="search-area" onSubmit={e => searchTitle(e)}>
      <form>
        <div className="search-bar">
          <input type="text" name="search" placeholder="Search for a book" 
            value={title} onChange={e => setTitle(e.target.value)} />
          <button onClick={searchTitle}>Search</button>
        </div>
        <span className="error-msg hidden">Error: Search did not go through</span>
        <input type="checkbox" id="sortByAlphabet" checked={sortA} onChange={e => setSortA(e.target.checked)} />
        <label for="sortByAlphabet">Sort by Alphabetical order</label>
        <input type="checkbox" id="sortByAlphabet" checked={sortDate} onChange={e => setSortDate(e.target.checked)} />
        <label for="sortByAlphabet">Sort by Date of publishing</label>
      </form>
    </div>
  )
}

export default Search;