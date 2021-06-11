import React from 'react';
import {CITIES} from '../../const.js';

function Cities() {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => {
            return (
              <li className="locations__item" key={city + 1}>
                <a className="locations__item-link tabs__item" href="/#">
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default Cities;
