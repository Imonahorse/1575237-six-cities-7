import React, {useState} from 'react';
import Header from '../../components/header/header.jsx';
import Cities from '../../components/cities/cities.jsx';
import OffersPreview from '../../components/offers-preview/offers-preview.jsx';
import offerCardProp from '../../components/offer-card/offer-card-prop.js';
import PropTypes from 'prop-types';

const defaultState = 'Amsterdam';

function Main({offers}) {
  const [cityState, setCityState] = useState(defaultState);
  const handleActiveCity = (city) => setCityState(city);
  const cityOffers = offers.filter((offer) => offer.city.name === cityState);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities handleActiveCity={handleActiveCity} cityState={cityState}/>
        <OffersPreview cityOffers={cityOffers} cityState={cityState}/>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default Main;
