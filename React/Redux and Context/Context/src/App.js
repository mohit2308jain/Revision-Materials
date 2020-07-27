import React from 'react';

import ColorContext from './contexts/ColorContext';
import { LanguageStore } from './contexts/LanguageContext';
import UserCreate from './components/UserCreate';
import LanguageSelector from './components/LanguageSelector';
 
class App extends React.Component{

    render(){
        return(
        <div className="ui container">
        
            <LanguageStore>
            <LanguageSelector />

            {/* prop name should be value only*/}
            {/*Context providers can be used in any order */}
            <ColorContext.Provider value="red">
                <UserCreate />
            </ColorContext.Provider>
            </LanguageStore>
        </div>
        )
    }
}

export default App;

/*
{ prop name should be value only }
<LanguageContext.Provider value={this.state.language}>
<UserCreate />
</LanguageContext.Provider>

{ Provider always separate set of info objects }
<LanguageContext.Provider value="english">
<UserCreate />
</LanguageContext.Provider>

<UserCreate />
*/

/*
<div className="ui container">
        
            <LanguageSelector onLanguageChange={this.onLanguageChange} />

            {/* prop name should be value only}
            {Context providers can be used in any order }
            <ColorContext.Provider value="red">
            <LanguageContext.Provider value={this.state.language}>
                <UserCreate />
            </LanguageContext.Provider>
            </ColorContext.Provider>

        </div>
*/