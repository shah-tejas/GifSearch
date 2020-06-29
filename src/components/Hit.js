import React from 'react'
import {useImage} from 'react-image'
import './Hit.css';

const Hit = ({ title, link }) => {
    const {src, isLoading} = useImage({
        srcList: link,
        useSuspense: false
    });
    return (
        <div className="hitContainer">
            {
                isLoading ?
                    "Loading..." :
                    <img src={src} alt={title} />
            }
        </div>
    );
}

export default Hit;
