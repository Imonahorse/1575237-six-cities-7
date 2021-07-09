import {NameSpace} from '../root-reducer.js';

const selectCity = (state) => state[NameSpace.APP].city;
const selectActiveSort = (state) => state[NameSpace.APP].sort;

export {
  selectCity,
  selectActiveSort
};
