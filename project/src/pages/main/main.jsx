import React from 'react';
import Header from '../../components/header/header.jsx';
import Cities from '../../components/cities/cities.jsx';
import OffersPreview from '../../components/offers-preview/offers-preview.jsx';
import MainEmpty from '../../components/main-empty/main-empty.jsx';
import {selectCity} from '../../store/reducer/app-process/selectors.js';
import {useSelector} from 'react-redux';
import {selectFilteredOffers} from '../../store/reducer/app-data/selectors.js';

function Main() {
  const currentCity = useSelector(selectCity);
  const cityOffers = useSelector(selectFilteredOffers);

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

export default Main;
