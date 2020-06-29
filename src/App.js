import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox } from 'react-instantsearch-dom';
import Hits from './components/Hits';

const searchClient = algoliasearch('0RDP6I1JSB', '30cfaf989bcf8a1885f112de273eb0ed');

function App() {
  return (
    <div className="App">
      <InstantSearch searchClient={searchClient} indexName="giphy">
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
}

export default App;
