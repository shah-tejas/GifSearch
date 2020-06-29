import React from 'react'
import {useImage} from 'react-image'
import './Hit.css';
import Loader from 'react-loader-spinner';
import Clipboard from 'react-clipboard.js';
import AssignmentIcon from '@material-ui/icons/Assignment';

const Image = ({ src, alt }) => {
    return (
        <div>
            <Clipboard data-clipboard-text={src} className="gifButton">
                <img src={src} alt={alt} />
                <div className="overLay">
                    <AssignmentIcon fontSize="large" />
                </div>
            </Clipboard>
        </div>
        
    )
}

const Hit = ({ title, link }) => {
    const formattedLink = link.substring(link.indexOf('https://media.giphy.com'));
    const {src, isLoading} = useImage({
        srcList: formattedLink,
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
