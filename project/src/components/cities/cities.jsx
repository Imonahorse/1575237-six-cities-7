import React from 'react';
import {CITIES} from '../../const.js';
import cn from 'classnames';
import {changeCity} from '../../store/actions/actions.js';
import {selectCity} from '../../store/reducer/app-process/selectors.js';
import {useSelector, useDispatch} from 'react-redux';

function Cities() {
  const currentCity = useSelector(selectCity);
  const dispatch = useDispatch();
  const exchangeCity = (city) => {
    dispatch(changeCity(city));
  };

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {Object.keys(CITIES).map((city) => {
            const cityClass = cn('locations__item-link tabs__item', {'tabs__item--active': currentCity === city});

            return (
              <li
                className="locations__item"
                key={city}
                onClick={() => exchangeCity(city)}
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

export default Cities;
