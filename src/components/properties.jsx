import React, { Fragment } from 'react';
import PropertyCard from './propertycard';

const Properties = () => (
  <Fragment>
    <PropertyCard
      title="Flat"
      type="1 Bed Flat"
      bedrooms="1"
      bathrooms="1"
      price="1"
      city="Manchester"
      email="test@mcr.com"
    />
  </Fragment>
);

export default Properties;
