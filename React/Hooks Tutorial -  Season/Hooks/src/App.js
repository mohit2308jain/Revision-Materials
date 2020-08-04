import React from 'react';
import './App.css';

import Accordion from './components/Accordion';
import Search from './components/SearchWidget';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Routes';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content: 'React is a frontend JS framework.'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components.'
  }
]

const options = [
    {
        label: 'The color Red',
        value: 'res'
    },
    {
        label: 'The color Blue',
        value: 'blue'
    },
    {
        label: 'The color Green',
        value: 'green'
    }
]

const App = () => {

    const [selected, setSelected] = React.useState(options[0]);
    const [showDropdown, setShowDropdown] = React.useState(true);

    return(
        <React.Fragment>
        <br />
        {/*<Accordion items={items} />*/}
        {/*<Search />
        
        
        <Translate />
        */}
        <Header />
        <Route path="/">
            <Accordion items={items} />
        </Route>
        <Route path="/list">
            <Search />
        </Route>
        <Route path="/dropdown">
            <button onClick={() => setShowDropdown(!showDropdown)}>
                Toggle Dropdown
            </button>
            {(showDropdown) ? 
                (<Dropdown options={options}
                    label="Select a Color"
                    selected = {selected}
                    onSelectedChange={setSelected} />) : null
            }
        </Route>
        <Route path="/translate">
            <Translate />
        </Route>
        </React.Fragment>
    )
}

export default App;
