import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

library.add(faHome);

const NavBar = () => (
  <div className="navBar">
    <div className="textLogo">
      <FontAwesomeIcon icon="home" /><span>Surreal Estate</span>
      <ul className="nav">
        <li className="item"><button>View Properites</button></li>
        <li className="item"><button>Add a Property</button></li>
      </ul>
    </div>
  </div>
);

export default NavBar;
