import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Map from '../../components/map/map.jsx';
import OfferGallery from '../../components/offer-gallery/offer-gallery.jsx';
import OfferPage from '../../components/offer-page/offer-page.jsx';
import NearPlacesOffers from '../../components/near-places-offers/near-places-offers.jsx';
import Loading from '../../components/loading/loading.jsx';
import {
  selectOfferStatus,
  selectOffer,
  selectNearPlacesOffers,
  selectComments,
  selectNearOffersForMap
} from '../../store/reducer/app-data/selectors.js';
import {fetchComments, fetchOffer, fetchNearPlacesOffers} from '../../store/actions/api-actions.js';
import {useSelector, useDispatch} from 'react-redux';
import Layout from '../../layout/layout.jsx';

function Offer() {
  const {id} = useParams();
  const offer = useSelector(selectOffer);
  const offerStatus = useSelector(selectOfferStatus);
  const nearPlacesOffers = useSelector(selectNearPlacesOffers);
  const nearOffersForMap = useSelector(selectNearOffersForMap);
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOffer(id));
    dispatch(fetchNearPlacesOffers(id));
    dispatch(fetchComments(id));
  }, [id, dispatch]);

  if (offerStatus.isLoading) {
    return <Loading/>;
  }

  const {images} = offer;

  return (
    <Layout>
      <section className="property">
        <OfferGallery images={images}/>
        <OfferPage offer={offer} comments={comments} id={id}/>
        <Map cityOffers={nearOffersForMap} cityState={offer.city.name} offerPageId={offer.id}/>
      </section>
      {nearPlacesOffers.length && <NearPlacesOffers neighboringOffers={nearPlacesOffers}/>}
    </Layout>
  );
}

export default Offer;

