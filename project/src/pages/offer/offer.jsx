import React, {useEffect} from 'react';
import Header from '../../components/header/header.jsx';
import offerCardProp from '../../components/offer-card/offer-card-prop.js';
import {useParams, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Map from '../../components/map/map.jsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.jsx';
import OfferPage from '../../components/offer-page/offer-page.jsx';
import NearPlacesOffers from '../../components/nearPlacesOffers/nearPlacesOffers.jsx';
import {AppRoutes} from '../../const.js';
import {getOffer} from "../../store/api-actions";
import {connect} from 'react-redux';
import Loading from "../../components/loading/loading";

function Offer({load, offerTest, offerStatus}) {
  const params = useParams();

  useEffect(() => {
    load(params.id);
  }, [params.id])


  if (offerStatus.isLoading) {
    return <Loading/>
  }

  if (!offerTest) {
    return (
      <Redirect to={AppRoutes.NOT_FOUND}/>
    );
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          {/*<OfferGallery images={images}/>*/}
          <OfferPage offer={offerTest}/>
          {/*<Map cityOffers={nearPlacesOffers} cityState={offer.city.name}/>*/}
        </section>
        {/*{nearPlacesOffers.length && <NearPlacesOffers neighboringOffers={nearPlacesOffers}/>}*/}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  offerTest: state.offer,
  offerStatus: state.offerStatus,
})

const mapDispatchToProps = (dispatch) => ({
  load(id) {
    dispatch(getOffer(id))
  }
})

Offer.propTypes = {
  offers: PropTypes.arrayOf(offerCardProp).isRequired,
};

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
