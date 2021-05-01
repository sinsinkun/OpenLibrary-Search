import { useRef, useState } from "react";
import { useStoreContext } from '../redux';

function Search() {

  const [store, dispatch] = useStoreContext();
  const [title, setTitle] = useState("");
  const [sortA, setSortA] = useState(false);
  const [sortDate, setSortDate] = useState(false);
  const searchMsg = useRef();

  function compareAlpha(a,b) {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  }

  function compareDate(a,b) {
    if (a.first_publish_year < b.first_publish_year) return 1;
    if (a.first_publish_year > b.first_publish_year) return -1;
    return 0;
  }

  async function searchTitle(e) {
    e.preventDefault();
    searchMsg.current.classList.remove("hidden");
    searchMsg.current.innerText = "Searching...";
    // convert spaces to +
    const query = title.replace(" ", "+");
    if (query === "" || query === "+") {
      searchMsg.current.innerText = "Please enter a search term.";
      return;
    }
    // fetch data
    const data = await fetch(`http://openlibrary.org/search.json?q=${query}&page=1`).then(r => r.json())
      .catch(err => {
        console.log(err);
        searchMsg.current.innerText = "Error: Something went wrong with your search";
        return;
      });
    // sort data alphabetically
    if (sortA) {
      searchMsg.current.innerText = "Sorting the results...";
      data.docs.sort(compareAlpha);
    }
    // sort data by publish date
    if (sortDate) {
      searchMsg.current.innerText = "Sorting the results...";
      data.docs.sort(compareDate);
    }
    // save data to global store
    dispatch({ do:"saveResults", data:data });
    //clean up
    searchMsg.current.innerText = "";
    searchMsg.current.classList.add("hidden");
  }

  function sortByAlpha(e) {
    if (!sortA) {
      const data = store.sortedResults;
      if (Object.keys(data).length > 0) {
        data.docs.sort(compareAlpha);
        dispatch({ do:"saveResults", data:{...data} });
      }
    }
    setSortA(e.target.checked);
  }

  function sortByDate(e) {
    if (!sortDate) {
      const data = store.sortedResults;
      if (Object.keys(data).length > 0) {
        data.docs.sort(compareDate);
        dispatch({ do:"saveResults", data:{...data} });
      }
    }
    setSortDate(e.target.checked);
  }

  function changeResultsPerPage(num) {
    dispatch({do:"newRPP", data:num});
  }

  return(
    <div className="search-area" onSubmit={e => searchTitle(e)}>
      <form>
        <div className="search-bar">
          <input type="text" name="search" placeholder="Search for a book" aria-required="true"
            value={title} onChange={e => setTitle(e.target.value)} />
          <button onClick={searchTitle}>Search</button>
        </div>
        <span className="error-msg hidden" ref={searchMsg}></span>
        <div className="sort-options">
          <div>
            <input type="checkbox" id="sortByAlphabet" checked={sortA} onChange={e => sortByAlpha(e)} />
            <label htmlFor="sortByAlphabet">Sort by alphabetical order</label>
          </div>
          &nbsp;
          <div>
            <input type="checkbox" id="sortByAlphabet" checked={sortDate} onChange={e => sortByDate(e)} />
            <label htmlFor="sortByAlphabet">Sort by date of publishing</label>
          </div>
        </div>
      </form>
      <div className="page-options">
        <span>Number of results per page: </span>
        <input type="radio" name="resultsPerPage" id="display10" onChange={() => changeResultsPerPage(10)} />
        <label htmlFor="display10">10</label>
        &nbsp;
        <input type="radio" name="resultsPerPage" id="display20" defaultChecked onChange={() => changeResultsPerPage(20)} />
        <label htmlFor="display20">20</label>
        &nbsp;
        <input type="radio" name="resultsPerPage" id="display50" onChange={() => changeResultsPerPage(50)} />
        <label htmlFor="display50">50</label>
      </div>
    </div>
  )
}

export default Search;