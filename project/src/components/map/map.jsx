import React, {useRef, useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';
import cn from 'classnames';
import {AppRoutes} from '../../const.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap.js';
import PropTypes from 'prop-types';
import offerCardProp from '../offer-card/offer-card-prop.js';

const URL_MARKER_DEFAULT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
const URL_MARKER_CURRENT = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

function Map({activeCard, cityOffers, cityState}) {
  const mapRef = useRef(null);
  const {path} = useRouteMatch();
  const map = useMap(mapRef, cityState);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      cityOffers.forEach((offer) => {
        leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: (offer.id === activeCard)
              ? currentCustomIcon
              : defaultCustomIcon,
          },
        ).addTo(map);
      });
    }
  }, [map, cityOffers, activeCard, currentCustomIcon, defaultCustomIcon]);

  const mapClass = cn('map', {
    'cities__map': path === AppRoutes.MAIN,
    'property__map': path === AppRoutes.OFFER,
  });

  return (
    <section
      className={mapClass}
      ref={mapRef}
    >
    </section>
  );
}

Map.propTypes ={
  activeCard: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerCardProp).isRequired,
  cityState: PropTypes.string.isRequired,
};

export default Map;
