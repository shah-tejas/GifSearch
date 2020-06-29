import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import Hit from './Hit';
import './Hits.css';

const Hits = ({ hits }) => {
    return (
        <div className="hitsContainer">
            {hits.map(hit => (
                <Hit key={hit.objectID} title={hit['GIPHY ​Title']} link={hit['Web Archive Link']} />
            ))}
        </div>
    );
}

export default connectHits(Hits);
