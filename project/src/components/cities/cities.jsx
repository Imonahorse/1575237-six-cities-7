import React from 'react';
import {CITIES} from '../../const.js';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {actionCreator} from '../../store/actions.js';
import {connect} from 'react-redux';

function Cities({currentCity, changeCity}) {
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
                onClick={() => changeCity(city)}
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
  currentCity: PropTypes.string.isRequired,
  changeCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  changeCity(city) {
    dispatch(actionCreator.changeCity(city));
  },
});

export {Cities};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
