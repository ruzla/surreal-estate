import React from 'react';
import PropertyCard from './propertycard';
import axios from 'axios';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      alertMessage: '',
      error: false,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then((response) => this.setState({ properties: response.data }))
      .catch(() => {
        this.setState({
          alertMessage: 'Server error. Please try again later.',
          error: true,
        });
      });
  }

  render() {
    return (
      <div className="properties">
        {this.state.properties.map(property => (
          <div key={property._id} className="col">
            <PropertyCard {...property} />
          </div>
        ))}
      </div>
    );
  }
}


export default Properties;
