import React from 'react';
import Header from '../../components/header/header.jsx';
import Cities from '../../components/cities/cities.jsx';
import OffersPreview from '../../components/offers-preview/offers-preview.jsx';
import offerCardProp from '../../components/offer-card/offer-card-prop.js';
import PropTypes from 'prop-types';
import MainEmpty from '../../components/main-empty/main-empty.jsx';
import {connect} from 'react-redux';
import {actionCreator} from '../../store/actions.js';

function Main(props) {
  const {offers, cityState, getOffers} = props;
  const cityOffers = offers.filter((offer) => offer.city.name === cityState);
    getOffers(cityOffers);

  return (
    <div className="page page--gray page--main">
      <Header/>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities/>
        {cityOffers.length ? <OffersPreview cityOffers={cityOffers} cityState={cityState}/> : <MainEmpty cityState={cityState}/>}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cityState: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  getOffers(offers) {
    dispatch(actionCreator.getOffers(offers));
  },
});

Main.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
  cityState: PropTypes.string.isRequired,
  getOffers: PropTypes.func.isRequired,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
