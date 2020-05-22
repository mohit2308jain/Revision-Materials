import React from 'react';
import Header from './HeaderComponent';
import ControlledForm from './ControlledForm';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                <Switch>
                    <Route path='/controlform' component={ControlledForm} />
                    <Redirect to='/controlform' />
                </Switch>

            </React.Fragment>
        )
    }
}

export default Main;