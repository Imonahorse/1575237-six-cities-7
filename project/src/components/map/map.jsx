import React, {useRef, useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';
import cn from 'classnames';
import {AppRoutes} from '../../const.js';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap.js';
import PropTypes from 'prop-types';
import offerCardProp from '../offer-card/offer-card-prop.js';

const Icon = {
  DEFAULT: '/img/pin.svg',
  ACTIVE: '/img/pin-active.svg',
};
const IconSize = {
  X: 27,
  Y: 39,
};
const AnchorSize = {
  X: IconSize.X / 2,
  Y: IconSize.Y,
};
const defaultCustomIcon = leaflet.icon({
  iconUrl: Icon.DEFAULT,
  iconSize: [IconSize.X, IconSize.Y],
  iconAnchor: [AnchorSize.X, AnchorSize.Y],
});
const activeCustomIcon = leaflet.icon({
  iconUrl: Icon.ACTIVE,
  iconSize: [IconSize.X, IconSize.Y],
  iconAnchor: [AnchorSize.X, AnchorSize.Y],
});

function Map({activeCardId, cityOffers, cityState}) {
  const mapRef = useRef(null);
  const {path} = useRouteMatch();
  const map = useMap(mapRef, cityState);
  const mapClass = cn('map', {
    'cities__map': path === AppRoutes.MAIN,
    'property__map': path === AppRoutes.OFFER,
  });

  useEffect(() => {
    const markers = leaflet.layerGroup();

    if (map) {
      cityOffers.forEach((offer) => {
        const marker = leaflet.marker(
          {
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          },
          {
            icon: (offer.id === activeCardId) ? activeCustomIcon : defaultCustomIcon,
          });
        marker.addTo(markers);
      });

      markers.addTo(map);
    }

    return (() => {
      markers.clearLayers();
    });
  }, [map, cityOffers, activeCardId]);

  return (
    <section
      data-testid="map"
      className={mapClass}
      ref={mapRef}
    >
    </section>
  );
}

Map.propTypes = {
  activeCardId: PropTypes.number,
  cityOffers: PropTypes.arrayOf(offerCardProp).isRequired,
  cityState: PropTypes.string.isRequired,
};

export default Map;
