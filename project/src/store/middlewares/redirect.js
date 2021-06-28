import browserHistory from '../../browser-history';
import {ActionsType} from '../actions.js';

const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionsType.REDIRECT_TO_ROUTE) {
    browserHistory.push(action.payload);
  }

  return next(action);
};

export default redirect;
