import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import StreamCreate from './components/Streams/StreamCreate';
import StreamList from './components/Streams/StreamList';
import StreamEdit from './components/Streams/StreamEdit';
import StreamDelete from './components/Streams/StreamDelete';
import StreamShow from './components/Streams/StreamShow';
import Header from './components/Header';
import History from './History';
 
const App = () => {
  return(
    <div className="ui container">
      <Router history={History}>
        <Header />
        <Switch>
          <Route exact path='/' component={StreamList} />
          <Route exact path='/streams/new' component={StreamCreate} />
          <Route exact path='/streams/edit/:id' component={StreamEdit} />
          <Route exact path='/streams/delete/:id' component={StreamDelete} />
          <Route exact path='/streams/:id' component={StreamShow} />
        </Switch>
      </Router>
    </div>
  )
}

export default App;
