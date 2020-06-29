import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import Hits from './components/Hits';
import CustomSearchBox from './components/CustomSearchBox';
import './App.css';

const searchClient = algoliasearch('0RDP6I1JSB', '30cfaf989bcf8a1885f112de273eb0ed');

function App() {
  return (
    <div className="App">
      <div className="title">Search GIFs</div>
      <InstantSearch searchClient={searchClient} indexName="giphy">
        <CustomSearchBox autoFocus searchAsYouType={false} />
        <Hits />
      </InstantSearch>
    </div>
  );
}

export default App;
