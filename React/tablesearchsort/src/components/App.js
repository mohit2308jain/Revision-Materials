import React from 'react';
import TableSearch from "./Table Search/TableSearch";
import TableSearch2 from "./Table Search/TableSearch2";
import TableSort from "./TableSort";
import Header from "./Header";
import Robots from "./Robots";
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {

    render(){
        
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path="/tablesearch" component={() => <TableSearch />} />
                        <Route path="/tablesort" component={() => <TableSort />} />
                        <Route path="/robots" component={() => <Robots />} />
                        <Route path="/tablesearch2" component={() => <TableSearch2 />} />
                        <Redirect to="/tablesearch" />
                    </Switch>

                </BrowserRouter>
            </React.Fragment>
        )
    }
}

export default App;