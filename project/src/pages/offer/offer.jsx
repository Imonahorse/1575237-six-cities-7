import React, {useEffect} from 'react';
import Header from '../../components/header/header.jsx';
import {useParams} from 'react-router-dom';
import Map from '../../components/map/map.jsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.jsx';
import OfferPage from '../../components/offer-page/offer-page.jsx';
import NearPlacesOffers from '../../components/near-places-offers/near-places-offers.jsx';
import Loading from '../../components/loading/loading.jsx';
import {getOfferStatus, getOffer, getNearPlacesOffers, getComments} from '../../store/reducer/app-data/selectors.js';
import {fetchComments, fetchOffer, fetchNearPlacesOffers} from '../../store/api-actions.js';
import {useSelector, useDispatch} from 'react-redux';

function Offer() {
  const {id} = useParams();
  const offer = useSelector(getOffer);
  const offerStatus = useSelector(getOfferStatus);
  const nearPlacesOffers = useSelector(getNearPlacesOffers);
  const comments = useSelector(getComments);
  const dispatch = useDispatch();
  const loadNearPlacesOffers = (nearPlacesId) => dispatch(fetchNearPlacesOffers(nearPlacesId));
  const loadOffer = (offerId) => dispatch(fetchOffer(offerId));
  const loadComments = (commentId) => dispatch(fetchComments(commentId));

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

export default Offer;

