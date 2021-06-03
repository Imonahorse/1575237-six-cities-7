import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page.jsx';

function App({offersAmount}) {

  return (
    <MainPage offersAmount={offersAmount} />
  );
}

App.propTypes = {
  offersAmount: PropTypes.number.isRequired,
};

export default App;
