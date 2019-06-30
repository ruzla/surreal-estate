import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome, faPoundSign, faBed, faBath, faEnvelope, faStar,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faPoundSign, faBed, faBath, faEnvelope, faStar);

const PropertyCard = ({
  _id,
  title,
  bedrooms,
  bathrooms,
  price,
  email,
  type,
  city,
  onSaveProperty,
  userId,
}) => (
  <div className="propertyCard">
    <div className="propertyCardIcon"><FontAwesomeIcon icon="home" /></div>
    <div className="title">{title}</div>
    <div className="type">{type} - {city}</div>
    <div className="bedrooms"><FontAwesomeIcon id="bedIcon" icon="bed" />{bedrooms}</div>
    <div className="bathrooms"><FontAwesomeIcon id="bathIcon" icon="bath" />{bathrooms}</div>
    <div className="price"><FontAwesomeIcon id="poundIcon"icon="pound-sign" />{price}</div>
    <div className="email">
      <a href={`"mailto:"${email}`}><FontAwesomeIcon icon="envelope" />Email</a>
    </div>
    <div className="save">
      { userId && (
        <a
          onClick={() => onSaveProperty(_id)}
          className="save"
        >
          <i className="fas fa-star" /><FontAwesomeIcon icon="star" /> Save
        </a>
      )}
    </div>
  </div>
);

export default PropertyCard;
