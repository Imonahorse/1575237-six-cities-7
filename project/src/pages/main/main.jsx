import React from 'react';
import Header from '../../components/header/header.jsx';
import Cities from '../../components/cities/cities.jsx';
import OffersPreview from '../../components/offers-preview/offers-preview.jsx';
import offerCardProp from '../../components/offer-card/offer-card-prop.js';
import PropTypes from 'prop-types';
import MainEmpty from '../../components/main-empty/main-empty.jsx';
import {SortingTypes} from '../../sort.js';
import {getSort} from '../../store/reducer/app-process/selectors.js';
import {useSelector} from 'react-redux';

function Main({offers, currentCity}) {
  const activeSort = useSelector(getSort);

  const cityOffers = offers
    .filter((offer) => offer.city.name === currentCity)
    .slice()
    .sort(SortingTypes[activeSort]);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities/>
        {
          cityOffers.length
            ? <OffersPreview cityOffers={cityOffers} cityState={currentCity}/>
            : <MainEmpty cityState={currentCity}/>
        }
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
  currentCity: PropTypes.string.isRequired,
};


export default Main;
