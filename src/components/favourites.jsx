import React from 'react';
import axios from 'axios';

class Favourites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favourites: [],
    };
  }

  componentDidMount() {
    this.getSaved();
  }

  getSaved() {
    axios.get('http://localhost:3000/api/v1/Favourite/?populate=propertyListing')
      .then(({ data }) => {
        const favourites = data.filter(favourite => favourite.fbUserId === this.props.userId);
        this.setState({ favourites });
      });
  }

  handleDeleteProperties = (favouriteId) => {
    axios.delete(`http://localhost:3000/api/v1/Favourite/${favouriteId}`)
      .then(() => {
        this.getSaved();
      });
  };

  render() {
    return (
      <div className="favourites">
        {
          this.state.favourites.map(favourite => {
            return (
              <div key={favourite._id}>
                <span className="fav">{favourite.propertyListing.title}</span>
                <button
                  onClick={() => this.handleDeleteProperties(favourite._id)}
                  className="delete"
                >Delete
                </button>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Favourites;
