import React from 'react';
import PropertyCard from './propertycard';
import axios from 'axios';
import { Link } from 'react-router-dom';

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

  componentDidUpdate(prevProps) {
    const { search } = this.props.location;
    if (prevProps.location.search !== search) {
      axios.get(`http://localhost:3000/api/v1/PropertyListing${search}`)
        .then(({ data: properties }) => this.setState({ properties }))
        .catch(err => console.error(err));
    }
  }

  render() {
    return (
      <div className="properties">
        <div className="sideNav">
          <span className="filterTitle">Filter By Location:</span>
          <Link className="filterLink" to={'/?query={"city": "Manchester"}'}>Manchester</Link>
          <Link className="filterLink" to={'/?query={"city": "Leeds"}'}>Leeds</Link>
          <Link className="filterLink" to={'/?query={"city": "Sheffield"}'}>Sheffield</Link>
          <Link className="filterLink" to={'/?query={"city": "Liverpool"}'}>Liverpool</Link>
        </div>
        <div className="col-div">
          {this.state.properties.map(property => (
            <div key={property._id} className="col">
              <PropertyCard {...property} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}


export default Properties;
