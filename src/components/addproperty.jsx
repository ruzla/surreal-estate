import React, { Component } from 'react';
import axios from 'axios';

class AddProperty extends Component {
  state = {
    fields: {
      title: '',
      type: 'Flat',
      bedrooms: 1,
      bathrooms: 1,
      price: '',
      city: 'Manchester',
      email: '',
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
    axios.post('http://localhost:3000/api/v1/PropertyListing', this.state.fields);
    console.log(this.state.fields);
  };

  handleFieldChange = event => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    return (
      <div className="AddProperty">
        <form onSubmit={this.handleAddProperty}>
          <label htmlFor="title">Property Title</label>
          <input id="title" name="title" type="text" value={this.state.fields.title} onChange={this.handleFieldChange} placeholder="Enter Property Title Here...." />

          <label htmlFor="houseType">Type</label>
          <select id="houseType" name="type" value={this.state.fields.type} onChange={this.handleFieldChange}>
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>

          <label htmlFor="amountOfBedrooms">Bedrooms</label>
          <select id="amountOfBedrooms" name="bedrooms" value={this.state.fields.bedrooms} onChange={this.handleFieldChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>

          <label htmlFor="amountOfBathrooms">Bathrooms</label>
          <select id="amountOfBathrooms" name="bathrooms" value={this.state.fields.bathrooms} onChange={this.handleFieldChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="propertyPrice">Price £</label>
          <input id="propertyPrice" name="price" type="number" value={this.state.fields.price} onChange={this.handleFieldChange} placeholder="Enter Property Price Here...." min="0" />

          <label htmlFor="citySelect">City</label>
          <select id="citySelect" name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>

          <label htmlFor="emailAddress">Email</label>
          <input id="emailAddress" name="email" type="email" value={this.state.fields.email} onChange={this.handleFieldChange} placeholder="Enter Email Address Here...." />
          
          <button id="nameSubmitButton" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
