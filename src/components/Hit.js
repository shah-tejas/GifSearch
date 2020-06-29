import React from 'react'
import {useImage} from 'react-image'
import './Hit.css';
import Loader from 'react-loader-spinner';

const Image = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} />
    )
}

const Hit = ({ title, link }) => {
    const {src, isLoading} = useImage({
        srcList: link,
        useSuspense: false
    });
    return (
        <div className="hitContainer">
            {
                isLoading ?
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={80}
                    width={80}
                /> :
                <Image src={src} alt={title} />
            }
        </div>
    );
}

export default Hit;
