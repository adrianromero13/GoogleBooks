import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//import app components here
import HomePage from '../../containers/HomePage';
import SavedBooks from '../../containers/SavedBooks';
import MessageUI from '../../containers/MessageUI';
import Nav from '../../containers/Nav';


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route component={MessageUI} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
