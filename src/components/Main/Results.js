import { useState, useEffect } from 'react';
import { useStoreContext } from '../redux';

function Results() {

  const [store] = useStoreContext();
  const [numResults, setNumResults] = useState(-1);
  const [displayed, setDisplayed] = useState([]);
  const [pages, setPages] = useState(-1);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (Object.keys(store.sortedResults).length > 0) {
      setNumResults(store.sortedResults.numFound);
      let numPages = 1;
      if (store.sortedResults.numFound < 100) numPages = Math.ceil(store.sortedResults.numFound/store.resultsPerPage);
      else numPages = Math.ceil(100/store.resultsPerPage);
      setPages(numPages);
      setActivePage(1);
      setDisplayed(store.sortedResults.docs.slice(0,store.resultsPerPage));
    }
  }, [store.sortedResults, store.resultsPerPage])

  function gotoPage(page) {
    const minEntry = (page-1) * store.resultsPerPage;
    const maxEntry = minEntry + store.resultsPerPage;
    window.scrollTo({top:0, behavior:"smooth"});
    setActivePage(page);
    setDisplayed(store.sortedResults.docs.slice(minEntry, maxEntry));
  }

  function renderPageSelect() {
    let output = [];
    for (let i=0; i<pages; i++) {
      if (i === activePage-1) output.push(<button key={"page-select-" + i} className="active" onClick={() => gotoPage(i+1)}>{i+1}</button>)
      else output.push(<button key={"page-select-" + i} onClick={() => gotoPage(i+1)}>{i+1}</button>)
    }
    return output;
  }

  return(
    <div className="results-container">
      {numResults === -1 ? "" : 
        <div className="count">Number of results: {numResults > 100 ? "100+" : numResults}</div>
      }
      <div className="results" role="region">
        {displayed.map((result, i) =>
          <div className="entry" key={"display-" + i}>
            <div className="cover">{result.cover_i ? 
              <img src={`http://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`} 
                alt={`${result.title} cover`} height="100%" />
              : "(No cover available)"
            }</div>
            <p className="title">
              {result.title.length < 53 ? result.title : result.title.slice(0,50) + "..."}
              {result.title.length < 53 ? "" : <span className="fullname">{result.title}</span>}
            </p>
            <p>by {Array.isArray(result.author_name) ? result.author_name[0] : result.author_name || "(Unknown)"}</p>
            <p>Published in {result.first_publish_year || "(Unknown)"}</p>
            <a href={"https://openlibrary.org" + result.seed[0]} target="_blank" rel="noreferrer">
              Link to entry
            </a>
          </div>
        )}
      </div>
      {pages === -1 ? "" : <div className="pages">{renderPageSelect()}</div> }
    </div>
  )
}

export default Results;