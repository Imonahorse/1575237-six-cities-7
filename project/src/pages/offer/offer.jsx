import React from 'react';
import Header from '../../components/header/header.jsx';
import offerCardProp from '../../components/offer-card/offer-card-prop.js';
import {useParams, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Map from '../../components/map/map.jsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.jsx';
import OfferPage from '../../components/offer-page/offer-page.jsx';
import NearPlacesOffers from '../../components/nearPlacesOffers/nearPlacesOffers.jsx';

function Offer({offers}) {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);

  if (!offer) {
    return (
      <Redirect to={'/404'}/>
    );
  }

  const nearPlacesOffers = offers.filter((item) => (item.city.name === offer.city.name) && (item !== offer));
  const {images} = offer;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery images={images}/>
          <OfferPage offer={offer}/>
          <Map cityOffers={nearPlacesOffers} cityState={offer.city.name}/>
        </section>
        {nearPlacesOffers.length && <NearPlacesOffers neighboringOffers={nearPlacesOffers}/>}
      </main>
    </div>
  );
}

Offer.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export default Offer;
