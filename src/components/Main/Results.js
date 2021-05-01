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
      if (i === activePage-1) output.push(<span className="active" onClick={() => gotoPage(i+1)}>{i+1}</span>)
      else output.push(<span onClick={() => gotoPage(i+1)}>{i+1}</span>)
    }
    return output;
  }

  return(
    <div className="results-container">
      {numResults === -1 ? "" : 
        <div className="count">Number of results: {numResults > 100 ? "100+" : numResults}</div>
      }
      <div className="results">
        {displayed.map((result, i) =>
          <div className="entry" key={"display-" + i}>
            <span class="cover">{result.cover_i ? 
              <img src={`http://covers.openlibrary.org/b/id/${result.cover_i}-M.jpg`} 
                alt={`${result.title} cover`} height="100%" />
              : "(No cover available)"
            }</span>
            <span>{result.title}, <br/> by {result.author_name || "(Author unknown)"}</span>
            <br/>
            <span>Published {result.first_publish_year || "(Publish date unknown)"}</span>
            <br/>
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