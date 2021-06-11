import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../components/header/header.jsx';
import Cities from '../../components/cities/cities.jsx';
import OffersPreview from '../../components/offers-preview/offers-preview.jsx';
import mainProp from './main-prop.js';

function Main({offers}) {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities/>
        <OffersPreview offers={offers}/>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(
    mainProp,
  ).isRequired,
};

export default Main;
