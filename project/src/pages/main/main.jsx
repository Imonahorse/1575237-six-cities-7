import React from 'react';
import Cities from '../../components/cities/cities.jsx';
import OffersPreview from '../../components/offers-preview/offers-preview.jsx';
import MainEmpty from '../../components/main-empty/main-empty.jsx';
import {selectCity} from '../../store/reducer/app-process/selectors.js';
import {useSelector} from 'react-redux';
import {selectFilteredOffers} from '../../store/reducer/app-data/selectors.js';
import Layout from './../../layout/layout.jsx';

function Main() {
  const currentCity = useSelector(selectCity);
  const cityOffers = useSelector(selectFilteredOffers);

  return (
    <Layout>
      <h1 className="visually-hidden">Cities</h1>
      <Cities/>
      {
        cityOffers.length
          ? <OffersPreview cityOffers={cityOffers} cityState={currentCity}/>
          : <MainEmpty cityState={currentCity}/>
      }
    </Layout>
  );
}

export default Main;
