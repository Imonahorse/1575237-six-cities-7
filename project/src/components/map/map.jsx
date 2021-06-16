import React, {useRef, useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';
import cn from 'classnames';
import {AppRoutes} from '../../const.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap.js';
import PropTypes from 'prop-types';
import offerCardProp from '../offer-card/offer-card-prop.js';

const Marker = {
  DEFAULT: '/img/pin.svg',
  ACTIVE: '/img/pin-active.svg',
};
const IconSize = {
  X: 40,
  Y: 40,
};
const AnchorSize = {
  X: IconSize / 2,
  Y: IconSize,
};
const defaultCustomIcon = leaflet.icon({
  iconUrl: Marker.DEFAULT,
  iconSize: [IconSize.X, IconSize.Y],
  iconAnchor: [AnchorSize.X, AnchorSize.Y],
});
const activeCustomIcon = leaflet.icon({
  iconUrl: Marker.ACTIVE,
  iconSize: [IconSize.X, IconSize.Y],
  iconAnchor: [AnchorSize.X, AnchorSize.Y],
});

function Map({activeCard, cityOffers, cityState}) {
  const mapRef = useRef(null);
  const {path} = useRouteMatch();
  const map = useMap(mapRef, cityState);
  const mapClass = cn('map', {
    'cities__map': path === AppRoutes.MAIN,
    'property__map': path === AppRoutes.OFFER,
  });

  useEffect(() => {
    if (map) {
      cityOffers.forEach((offer) => {
        const marker = leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: (offer.id === activeCard) ? activeCustomIcon : defaultCustomIcon,
          });
        marker.addTo(map);
      });
    }
  }, [map, cityOffers, activeCard]);

  return (
    <section
      className={mapClass}
      ref={mapRef}
    >
    </section>
  );
}

Map.propTypes = {
  activeCard: PropTypes.string.isRequired,
  cityOffers: PropTypes.arrayOf(offerCardProp).isRequired,
  cityState: PropTypes.string.isRequired,
};

export default Map;
