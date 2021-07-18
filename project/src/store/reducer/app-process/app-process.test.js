import appProcess from './app-process.js';
import {ActionsType} from '../../actions/actions.js';

const state = {city: 'Paris', sort: 'Popular'};

describe('Reducer: app-process', () => {
  it('without additional parameters should return initial state', () => {

    expect(appProcess(undefined, {})).toEqual(state);
  });
  it('should return state with update city', () => {
    const changeCityAction = {
      type: ActionsType.CHANGE_CITY,
      payload: 'Moscow',
    };

    expect(appProcess(state, changeCityAction)).toEqual({...state, city: 'Moscow'});
  });
  it('should return state with update sort', () => {
    const changeCityAction = {
      type: ActionsType.CHANGE_SORT,
      payload: 'Unpopular',
    };

    expect(appProcess(state, changeCityAction)).toEqual({...state, sort: 'Unpopular'});
  });
});
