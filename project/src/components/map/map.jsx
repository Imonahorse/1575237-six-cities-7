import React from 'react';
import {useRouteMatch} from 'react-router-dom';
import cn from 'classnames';
import {AppRoutes} from '../../const.js';

function Map() {
  const {path} = useRouteMatch();
  const mapClass = cn('map', {
    'cities__map': path === AppRoutes.MAIN,
    'property__map': path === AppRoutes.OFFER,
  });

  return (
    <section className={mapClass}>
    </section>
  );
}

export default Map;
