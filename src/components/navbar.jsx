import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

library.add(faHome);

const NavBar = () => (
  <div className="navBar">
    <div className="textLogo">
      <FontAwesomeIcon icon="home" /><span>Surreal Estate</span>
      <ul className="nav">
      <Link className="item" to="/">View Properties</Link>
      <Link className="item" to="/add-property">Add Property</Link>
      </ul>
    </div>
  </div>
);

export default NavBar;
// <li className="item"><button>Add a Property</button></li>