import React from 'react';
import './SeasonDisplay.css';

const SeasonConfig = {
    Summer: {
        text: 'Let\'s hit the beach',
        iconName: 'sun'
    },
    Winter: {
        text: 'Burr, it is chilly!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat,month) => {
    console.log(lat + " " + month)
    if(month > 2 && month < 9){
        return (lat > 0 ? 'Summer' : 'Winter');
    }
    else {
        return (lat > 0 ? 'Winter' : 'Summer');
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName} = SeasonConfig[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <h1>{text}</h1>
            <i className={`${iconName} icon massive icon-right`} />
        </div>
    )
}

export default SeasonDisplay;