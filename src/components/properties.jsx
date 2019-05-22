import React, { Fragment } from 'react';
import Alert from './alert';
import PropertyCard from './propertycard';
import axios from 'axios';
import { Link } from 'react-router-dom';
import qs from 'qs';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faSearch);

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
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

  buildQueryString = (operation, valueObj) => {
    const { location: { search } } = this.props;
    const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
    const newQueryParams = {
      ...currentQueryParams,
      [operation]: JSON.stringify({
        ...JSON.parse(currentQueryParams[operation] || '{}'),
        ...valueObj,
      }),
    };
    return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
  };

  handleSearch = event => {
    event.preventDefault();
    const { search } = this.state;
    const newQueryString = this.buildQueryString('query', { title: { $regex: search } });
    const { history } = this.props;
    history.push(newQueryString);
  };

  handleSaveProperties = (propertyId) => {
    const { userId } = this.props;

    axios.post('http://localhost:3000/api/v1/Favourite', {
      propertyListing: propertyId,
      fbUserId: userId,
    });
  };

  render() {
    return (
      <Fragment>
        {this.state.error && <Alert message={this.state.alertMessage} />}
        <div className="properties">
          <div className="sideNav">
            <form className="searchForm" onSubmit={this.handleSearch}>
              <input
                placeholder="Search..."
                className="searchBar"
                type="text"
                value={this.state.search}
                onChange={event => this.setState({ search: event.target.value })}
              />
              <button className="searchButton" type="submit"><FontAwesomeIcon icon="search" /></button>
            </form>
            <span className="filterTitle">Filter By Location:</span>
            <Link className="filterLink" to={this.buildQueryString('query', { city: 'Manchester' })}>Manchester</Link>
            <Link className="filterLink" to={this.buildQueryString('query', { city: 'Leeds' })}>Leeds</Link>
            <Link className="filterLink" to={this.buildQueryString('query', { city: 'Sheffield' })}>Sheffield</Link>
            <Link className="filterLink" to={this.buildQueryString('query', { city: 'Liverpool' })}>Liverpool</Link>
            <span className="filterTitle">Filter By Price:</span>
            <Link className="filterLink" to={this.buildQueryString('sort', { price: -1 })}>Price Descending</Link>
            <Link className="filterLink" to={this.buildQueryString('sort', { price: +1 })}>Price Ascending</Link>
          </div>
          <div className="col-div">
            {this.state.properties.map(property => (
              <div key={property._id} className="col">
                <PropertyCard
                  userId={this.props.userId}
                  {...property}
                  onSaveProperty={this.handleSaveProperties}
                />
              </div>
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}


export default Properties;
