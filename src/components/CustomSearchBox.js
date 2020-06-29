import React from 'react';
import TextField from '@material-ui/core/TextField';
import { connectSearchBox } from 'react-instantsearch-dom';
import './CustomSearchBox.css';

const CustomSearchBox = ({currentRefinement, refine}) => {
    return (
        <div className="textBox">
            <TextField 
                label="Search GIFs" 
                variant="outlined" 
                value={currentRefinement}
                onChange={(e) => {refine(e.target.value)}}
                fullWidth
            />
        </div>
    );
}

export default connectSearchBox(CustomSearchBox);
