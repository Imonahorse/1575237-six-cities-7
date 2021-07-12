import React, {useEffect} from 'react';
import Header from '../../components/header/header.jsx';
import {useParams} from 'react-router-dom';
import Map from '../../components/map/map.jsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.jsx';
import OfferPage from '../../components/offer-page/offer-page.jsx';
import NearPlacesOffers from '../../components/near-places-offers/near-places-offers.jsx';
import Loading from '../../components/loading/loading.jsx';
import {selectOfferStatus, selectOffer, selectNearPlacesOffers, selectComments} from '../../store/reducer/app-data/selectors.js';
import {fetchComments, fetchOffer, fetchNearPlacesOffers} from '../../store/actions/api-actions.js';
import {useSelector, useDispatch} from 'react-redux';

function Offer() {
  const {id} = useParams();
  const offer = useSelector(selectOffer);
  const offerStatus = useSelector(selectOfferStatus);
  const nearPlacesOffers = useSelector(selectNearPlacesOffers);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearPlacesOffers(id));
    dispatch(fetchComments(id));
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
          <OfferPage offer={offer} comments={comments} id={id}/>
          <Map cityOffers={nearPlacesOffers} cityState={offer.city.name}/>
        </section>
        {nearPlacesOffers.length && <NearPlacesOffers neighboringOffers={nearPlacesOffers}/>}
      </main>
    </div>
  );
}

export default Offer;

