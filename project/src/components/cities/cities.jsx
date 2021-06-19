import React from 'react';
import {CITIES} from '../../const.js';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Cities({handleActiveCity, cityState}) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(CITIES).map((city) => {
            const cityClass = cn('locations__item-link tabs__item', {'tabs__item--active': cityState === city});

            return (
              <li
                className="locations__item"
                key={city}
                onClick={() => handleActiveCity(city)}
              >
                <a className={cityClass} href="/#">
                  <span>{city}</span>
                </a>
              </li>);
          })}
        </ul>
      </section>
    </div>
  );
}

Cities.propTypes = {
  handleActiveCity: PropTypes.func.isRequired,
  cityState: PropTypes.string.isRequired,
};

export default Cities;
