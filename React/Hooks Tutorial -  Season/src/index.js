import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';
import SeasonDisplay from './SeasonDisplay';
import useLatHook from './useLatHook';

const App = () => {
    
    const [lat,errorMessage] = useLatHook();

    const renderContent = () => {
        if(errorMessage && lat===null){
            return (<div>Error: {errorMessage}</div>);
        }

        else if(!errorMessage && lat){
            return (<SeasonDisplay lat = {lat}/>);
        }

        else return (<div><Loader message="Please accept location request..."/></div>);
    }
    
    return(
        <div>
            {renderContent()}
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'));