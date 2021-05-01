import { useState, useEffect } from 'react';
import { useStoreContext } from '../redux';

function Results() {

  const [store] = useStoreContext();
  const [numResults, setNumResults] = useState(0);
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    if (false) {
      setNumResults(store.rawResults.numFound);
      setDisplayed(store.rawResults.docs);
    }
  }, [store.rawResults])

  return(
    <div>
      Number of results: {numResults}
      <ul>
        {displayed.map(result =>
          <li>
            <span>{result.title}</span>
            <span>{result.author_name}</span>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Results;