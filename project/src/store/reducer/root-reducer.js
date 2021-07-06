import {combineReducers} from 'redux';
import userData from './user-data/user-data.js';
import appData from './app-data/app-data.js';
import appProcess from './app-process/app-process.js';

const NameSpace = {
  DATA: 'DATA',
  APP: 'APP',
  USER: 'USER',
};

const rootReducer = combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.APP]: appProcess,
  [NameSpace.USER]: userData,
});

export {NameSpace, rootReducer};
