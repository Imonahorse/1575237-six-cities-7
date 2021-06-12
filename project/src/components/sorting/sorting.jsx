import React, {useState} from 'react';
import cn from 'classnames';

const PlacesOptions = {
  POPULAR: 'Popular',
  PRICE_LOW_TO_HIGH: 'Price: low to high',
  PRICE_HIGH_TO_LOW: 'Price: high to low',
  TOP_RATED: 'Top rated first',
};

function Sorting() {
  const [state, setState] = useState({
    isOpen: false,
    activeType: 'Popular',
  });
  const sortClass = cn('places__options places__options--custom', {'places__options--opened': state.isOpen});

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => {
      setState((prevSortState) => ({...prevSortState, isOpen: !prevSortState.isOpen}));
    }}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {state.activeType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select">
          </use>
        </svg>
      </span>
      <ul className={sortClass}>
        {Object.values(PlacesOptions).map((item) => {
          const optionClass = cn('places__option', {'places__option--active': item === state.activeType});
          return (
            <li className={optionClass} tabIndex="0" key={item} onClick={() => {
              setState({...state, activeType: item});
            }}
            >
              {item}
            </li>);
        })},
      </ul>
    </form>
  );
}

export default Sorting;
