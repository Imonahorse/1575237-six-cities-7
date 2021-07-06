import {ActionsType} from '../../actions.js';

const initialState = {
  city: 'Paris',
  sort: 'Popular',
};

const appProcess = (state = initialState, action) => {
  switch (action.type) {
    case ActionsType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionsType.CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    default:
      return state;
  }
};

export default appProcess;
