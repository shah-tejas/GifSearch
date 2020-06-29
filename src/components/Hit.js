import React from 'react';
import './Hit.css';

const Hit = ({ title, link }) => {
    return (
        <div className="hitContainer">
            <img src={link} alt={title} />
        </div>
    );
}

export default Hit;
