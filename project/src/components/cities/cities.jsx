import React from 'react';
import {CITIES} from '../../const.js';
import cn from 'classnames';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {actionCreator} from '../../store/actions.js';

function Cities(props) {
  const {cityChange, cityState} = props;
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
                onClick={() => {
                  cityChange(city);
                }}
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

const mapStateToProps = (state) => ({
  cityState: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  cityChange(city) {
    dispatch(actionCreator.cityChange(city));
  },
});

Cities.propTypes = {
  cityState: PropTypes.string.isRequired,
  cityChange: PropTypes.func.isRequired,
};

export {Cities};
export default connect(mapStateToProps, mapDispatchToProps)(Cities);
