import React, {useState} from 'react';
import cn from 'classnames';
import {actionCreator} from "../../store/actions";
import {connect} from 'react-redux';

const PlacesOptions = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

const SortingTypes = {
  'Popular': (a, b) => a - b,
  'Price: low to high': (a, b) => a.price - b.price,
  'Price: high to low': (a, b) => b.price - a.price,
  'Top rated first': (a, b) => b.rating - a.rating,
}

function Sorting({cityOffers, handleFilteredOffers, defaultSort, sortChange}) {
  const [openState, setOpenState] = useState(false);
  const [activeSort, setActiveSort] = useState(defaultSort);
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
              setActiveSort(item);
              sortChange(item);
              handleFilteredOffers(cityOffers.slice().sort(SortingTypes[item]));
            }}
            >
              {item}
            </li>);
        })}
      </ul>
    </form>
  );
}

const mapStateToProps = (state) => ({
  defaultSort: state.sort,
})

const mapDispatchToProps = (dispatch) => ({
  sortChange(sort) {
    dispatch(actionCreator.sortChange(sort))
  }
})

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
