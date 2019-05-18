import React, { Fragment } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

library.add(faHome);

const NavBar = (props) => (
  <div className="navBar">
    <div className="textLogo">
      <FontAwesomeIcon icon="home" /><span id="title">Surreal Estate</span>
      <ul className="nav">
        <Link className="item" to="/">View Properties</Link>
        <Link className="item" to="/add-property">Add Property</Link>
        <div className="login">
          {props.userId ? (
            <Fragment>
              <button onClick={props.logOut}>Logout</button>
              <Link className="item" to="saved-properties">Saved Properties</Link>
            </Fragment>
          ) :
            (<FacebookLogin
              appId="714496712301081"
              autoLoad
              callback={props.onLogin}
            />
            )
        }
        </div>
      </ul>
    </div>
  </div>
);

export default NavBar;
