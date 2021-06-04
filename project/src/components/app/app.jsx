import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

function App({offers}) {

  return (
    <MainPage offers={offers} />
  );
}

App.propTypes = {
  offers: PropTypes.number.isRequired,
};

export default App;
