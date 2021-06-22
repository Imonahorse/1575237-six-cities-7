import React, {useState} from 'react';
import cn from 'classnames';
import {actionCreator} from '../../store/actions.js';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {PlacesOptions} from '../../sort.js';

function Sorting({activeSort, changeSort}) {
  const [openState, setOpenState] = useState(false);
  const sortClass = cn('places__options places__options--custom', {'places__options--opened': openState});

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => {
      setOpenState((prevState) => (!prevState));
    }}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select">
          </use>
        </svg>
      </span>
      <ul className={sortClass}>
        {Object.values(PlacesOptions).map((item) => {
          const optionClass = cn('places__option', {'places__option--active': item === activeSort});
          return (
            <li className={optionClass} tabIndex="0" key={item} onClick={() => {
              changeSort(item);
            }}
            >
              {item}
            </li>);
        })}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  activeSort: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSort: state.sort,
});

const mapDispatchToProps = (dispatch) => ({
  changeSort(sort) {
    dispatch(actionCreator.changeSort(sort));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
