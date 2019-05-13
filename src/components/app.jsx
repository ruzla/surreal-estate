import React from 'react';
import NavBar from './navbar';
import '../styles/app.scss';
import '../styles/AddProperty.scss';
import '../styles/properties.scss';
import { Switch, Route } from 'react-router';
import Properties from './properties';
import AddProperty from './addproperty';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
    };
  }

handleLogin = (response) => {
  this.setState({ userId: response.userID });
};

handleLogout = () => {
  window.FB.logout();
  this.setState({ userId: null });
};

render() {
  return (
    <React.Fragment>
      <NavBar
        onLogin={this.handleLogin}
        userId={this.state.userId}
        logOut={this.handleLogout}
      />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </React.Fragment>
  );
}
}


export default App;
