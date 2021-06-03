import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

function App(props) {
  const {countOfRentalOffers} = props;

  return (
    <MainPage countOfRentalOffers={countOfRentalOffers} />
  );
}

App.propTypes = {
  countOfRentalOffers: PropTypes.number.isRequired,
};

export default App;
