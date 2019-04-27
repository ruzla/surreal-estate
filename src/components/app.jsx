import React from 'react';
import NavBar from './navbar';
import '../styles/app.scss';
import { Switch, Route } from 'react-router';
import Properties from './properties';
import AddProperty from './addproperty';

const App = () => (
  <React.Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Properties} />
      <Route exact path="/add-property" component={AddProperty} />
    </Switch>
  </React.Fragment>
);

export default App;
