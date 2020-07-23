import React from 'react';

import ColorContext from './contexts/ColorContext';
import LanguageContext from './contexts/LanguageContext';
import UserCreate from './components/UserCreate';
 
class App extends React.Component{
  
  state = {
    language: 'english'
  }

  onLanguageChange = (lan) => {
    this.setState({language: lan})
  }

  render(){
    return(
      <div className="ui container">
        <div>
          Select a language: 
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>

        {/* prop name should be value only*/}
        {/*Context providers can be used in any order */}
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>

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
