import React, {useState} from 'react';
import cn from 'classnames';
import {changeSort} from '../../store/actions/actions.js';
import {PlacesOptions} from '../../sort.js';
import {selectActiveSort} from '../../store/reducer/app-process/selectors.js';
import {useSelector, useDispatch} from 'react-redux';

function Sorting() {
  const [openState, setOpenState] = useState(false);
  const sortClass = cn('places__options places__options--custom', {'places__options--opened': openState});
  const activeSort = useSelector(selectActiveSort);
  const dispatch = useDispatch();
  const exchangeSort = (sort) => {
    dispatch(changeSort(sort));
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={() => {
      setOpenState((prevState) => (!prevState));
    }}
    >
      <span className="places__sorting-caption">Sort by </span>
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
              exchangeSort(item);
            }}
            >
              {item}
            </li>);
        })}
      </ul>
    </form>
  );
}


export default Sorting;
