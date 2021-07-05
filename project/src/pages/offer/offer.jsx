import React, {useEffect} from 'react';
import Header from '../../components/header/header.jsx';
import offerCardProp from '../../components/offer-card/offer-card-prop.js';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';
import Map from '../../components/map/map.jsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.jsx';
import OfferPage from '../../components/offer-page/offer-page.jsx';
import NearPlacesOffers from '../../components/near-places-offers/near-places-offers.jsx';
import {getOffer, getNearPlacesOffers, getComments} from '../../store/api-actions.js';
import {connect} from 'react-redux';
import Loading from '../../components/loading/loading.jsx';
import commentProp from '../../components/comment/comment-prop.js';

function Offer({comments, loadOffer, offer, offerStatus, loadNearPlacesOffers, nearPlacesOffers, loadComments}) {
  const {id} = useParams();

  useEffect(() => {
    loadOffer(id);
    loadNearPlacesOffers(id);
    loadComments(id);
  }, [id]);

  if (offerStatus.isLoading) {
    return <Loading/>;
  }

  const {images} = offer;

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <OfferGallery images={images}/>
          <OfferPage offer={offer} comments={comments}/>
          <Map cityOffers={nearPlacesOffers} cityState={offer.city.name}/>
        </section>
        {nearPlacesOffers.length && <NearPlacesOffers neighboringOffers={nearPlacesOffers}/>}
      </main>
    </div>
  );
}

const mapStateToProps = (state) => ({
  offer: state.offer,
  offerStatus: state.offerStatus,
  nearPlacesOffers: state.nearPlacesOffers,
  comments: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  loadNearPlacesOffers(id) {
    dispatch(getNearPlacesOffers(id));
  },
  loadOffer(id) {
    dispatch(getOffer(id));
  },
  loadComments(id) {
    dispatch(getComments(id));
  },
});

Offer.propTypes = {
  comments: PropTypes.arrayOf(commentProp),
  loadOffer: PropTypes.func.isRequired,
  offer: offerCardProp,
  nearPlacesOffers: PropTypes.arrayOf(offerCardProp).isRequired,
  loadComments: PropTypes.func.isRequired,
  loadNearPlacesOffers: PropTypes.func.isRequired,
  offerStatus: PropTypes.shape({
    isLoading: PropTypes.string.isRequired,
    isSuccess: PropTypes.string.isRequired,
    isError: PropTypes.string.isRequired,
  }).isRequired,
  commentStatus: PropTypes.shape({
    isLoading: PropTypes.string.isRequired,
    isSuccess: PropTypes.string.isRequired,
    isError: PropTypes.string.isRequired,
  }).isRequired,
};

export {Offer};
export default connect(mapStateToProps, mapDispatchToProps)(Offer);
