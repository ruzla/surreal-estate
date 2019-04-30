import React, { Component } from 'react';

class AddProperty extends Component {
  state = {
    fields: {
      title: '',
      type: 'Flat',
      city: 'Manchester',
    },
  };

  handleAddProperty = event => {
    event.preventDefault();
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
          <label htmlFor="citySelect">City</label>
          <select id="citySelect" name="city" value={this.state.fields.city} onChange={this.handleFieldChange}>
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
          <button id="nameSubmitButton" type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddProperty;
