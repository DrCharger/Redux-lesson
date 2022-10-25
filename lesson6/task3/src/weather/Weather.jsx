import React, { Component } from 'react';
import { connect } from 'react-redux';
import City from './City';
import { fetchUserData } from './weather.actions';
import { citiesSelector } from './weather.selectors';

class Weather extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }
  render() {
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {this.props.cities.map(city => (
            <City key={city.id} city={city} />
          ))}
        </ul>
      </main>
    );
  }
}

const setState = state => {
  return {
    cities: citiesSelector(state),
  };
};
const mapDispatch = {
  fetchUserData: fetchUserData,
};

export default connect(setState, mapDispatch)(Weather);
