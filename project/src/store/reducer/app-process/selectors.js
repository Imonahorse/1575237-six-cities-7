import {NameSpace} from '../root-reducer.js';

const getCity = (state) => state[NameSpace.APP].city;
const getSort = (state) => state[NameSpace.APP].sort;

export {
  getCity,
  getSort
};
